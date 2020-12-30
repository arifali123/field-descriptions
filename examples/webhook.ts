import { Webhook, MessageBuilder } from "discord-webhook-node";
import { FD } from "../src/index";
const hook = new Webhook({
  url:
    "https://ptb.discord.com/api/webhooks/792990958152581130/1bCH9-iits4fx1nv4uTueRCFELeCs9IF3NmxmVwPNFMXazSQwdLwfISximOSIxrFJi5G",
});
hook.send(
  new MessageBuilder().setDescription(
    FD([{ name: "Name", value: "Arif" }], {
      separator: "#",
      nameEdits: { bold: true, underline: true },
      valueEdits: { italic: true, strikethrough: true },
    })
  )
);
