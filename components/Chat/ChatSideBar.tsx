'use client'

import React, { useContext } from 'react'
import { Box, Flex, IconButton, ScrollArea, Text } from '@radix-ui/themes'
import cs from 'classnames'
import { AiOutlineCloseCircle, AiOutlineDownload } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi'
import { RiProhibitedLine, RiExternalLinkFill} from 'react-icons/ri'
import ChatContext from './chatContext'

import './index.scss'

export const ChatSideBar = () => {
  const {
    currentChatRef,
    chatList,
    DefaultPersonas,
    toggleSidebar,
    onDeleteChat,
    onChangeChat,
    onCreateChat,
    onExportChat,
    onClearChatList,
    onSaveChatList,
  } = useContext(ChatContext)

  return (
    <Flex direction="column" className={cs('chart-side-bar', { show: toggleSidebar })}>
      <Flex className="p-2 h-full overflow-hidden w-64" direction="column" gap="3">
        <Box
          width="auto"
          onClick={() => onCreateChat?.(DefaultPersonas[0])}
          className="bg-token-surface-primary active:scale-95 cursor-pointer"
        >
          <FiPlus className="size-4" />
          <Text>New Chat</Text>
        </Box>
        <ScrollArea className="flex-1" type="auto" scrollbars="vertical">
          <Flex direction="column" gap="3">
            {chatList.map((chat) => (
              <Box
                key={chat.id}
                width="auto"
                className={cs('bg-token-surface active:scale-95 truncate cursor-pointer', {
                  active: currentChatRef?.current?.id === chat.id
                })}
                onClick={() => onChangeChat?.(chat)}
              >
                <Flex gap="2" align="center">
                  <BiMessageDetail className="size-4" />
                  <Text as="p" className="truncate">
                    {chat.persona?.name}
                  </Text>
                </Flex>
                <Flex gap="2" align="center">
                  <IconButton
                    size="2"
                    className="cursor-pointer"
                    variant="ghost"
                    color="gray"
                    radius="full"
                    onClick={(e) => {
                      e.stopPropagation()
                      onExportChat?.(chat)
                    }}
                  >
                    <AiOutlineDownload className="size-4" />
                  </IconButton>
                  <IconButton
                    size="2"
                    className="cursor-pointer"
                    variant="ghost"
                    color="gray"
                    radius="full"
                    onClick={(e) => {
                      e.stopPropagation()
                      onDeleteChat?.(chat)
                    }}
                  >
                    <AiOutlineCloseCircle className="size-4" />
                  </IconButton>
                </Flex>
              </Box>
            ))}
          </Flex>
        </ScrollArea>
        <Flex className="p-2 overflow-hidden w-64" direction="row" gap="3" align="center">
          <Box
            width="auto"
            onClick={() => onSaveChatList?.()}
            className="bg-token-surface-primary active:scale-95 cursor-pointer"
          >
            <RiExternalLinkFill className="size-4" />
            <Text>Export</Text>
          </Box>
          <Box
            width="auto"
            onClick={() => onClearChatList?.()}
            className="bg-token-surface-primary active:scale-95 cursor-pointer"
          >
            <RiProhibitedLine className="size-4" />
            <Text>Clear</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ChatSideBar
