import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ping',
            description: 'Tags all users in group chat',
            aliases: ['all', 'tagall'],
            category: 'general',
            usage: `${client.config.prefix}everyone`,
            adminOnly: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(
            `${M.groupMetadata?.subject || 'Group Ping'}\n*[TAGS HIDDEN]*`,
            undefined,
            undefined,
            M.groupMetadata?.participants.map((user) => user.jid)
        ))
    }
}
