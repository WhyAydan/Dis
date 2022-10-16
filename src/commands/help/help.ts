import { Command, CommandExecuteOptions } from '../../structures';
import type { Client } from '../../Client';
import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js';

export default class HelpCommand extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'help',
      description: 'Shows the bot ping.',
      type: ApplicationCommandType.ChatInput,
      options: [
        {
          name: `topic`,
          description: 'Pick Your Support Topic',
          required: true,
          type: ApplicationCommandOptionType.String
        },
        {
          name: `num2`,
          description: 'demo',
          required: false,
          type: ApplicationCommandOptionType.String,
          choices: [
            {name: 'lol', value: 'demo'},
          ]
        },
      ],
    });
  }

  execute({ interaction }: CommandExecuteOptions) {
    interaction.reply({ content: `Hey <@&${process.env.MOD_TEAM_ID}> looks like ${interaction.user} requires some help with :(` });
  }
}
