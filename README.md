# Install

```bash
npm install field-descriptions
```

# Usage

Can add to any embed class or object in discord.js or any other library. Returns a string so should be very versatile.

```js
new MessageEmbed({
  description: FD([
    { name: "New", value: "npm package" },
    { name: "For", value: "Making Discord Embeds Easy" },
  ]),
});
```

# Make Discord Embeds Easy

When You Think Of Making Your Discord Embed Look Like this
![Cool Embed](https://cdn.discordapp.com/attachments/777453483711266830/779988440632524830/unknown.png)
The Code Probably looks like this

```js
new MessageEmbed({
  color: "#b0beec",
  timestamp: Date.now(),
  footer: {
    text: `Altrus Bot By arif#7674`,
    iconURL:
      "https://cdn.discordapp.com/attachments/777453483711266830/777648678541328414/unknown.png",
  },
  description:
    "**Product Name:** Walmart + Reward Card\n**Product Cost:** $7.50\n**Stock Count:** 191\n**Feedback Score:** 60",
});
```

Nobody wants to write such a weird description just for their description to look nice. Discord.js has a feature to make displaying key-value data easier with their fields.

```js
new MessageEmbed({
  fields: [
    { name: "Regular field title", value: "Some value here" },
    { name: "\u200B", value: "\u200B" },
    { name: "Inline field title", value: "Some value here", inline: true },
    { name: "Inline field title", value: "Some value here", inline: true },
  ],
});
```

I wanted to apply the same type of simplicity to showing key-value data in the description part of embeds. This is the whole point of this package to make descriptions in embeds easier. The same embed in the first image can be created in my package like this.

```js
new MessageEmbed({
  description: FD(
    [
      { name: "Product Name", value: "Walmart + Reward Card" },
      { name: "Product Cost", value: "$7.50" },
      { name: "Stock Count", value: "191" },
      { name: "Feedback Score", value: "60" },
    ],
    { nameEdits: { bold: true }, separator: ":" }
  ),
  color: "#b0beec",
  timestamp: Date.now(),
  footer: {
    text: `Altrus Bot By arif#7674`,
    iconURL:
      "https://cdn.discordapp.com/attachments/777453483711266830/777648678541328414/unknown.png",
  },
});
```

This brings the field type inputs with some extra features to descriptions inside discord.js embeds. This is extremely easy to customize with included markdown editing so that you can apply your favorite effects to your embed descriptions.

Thanks for checking out my package as this is my first npm package and feel free to open an issue or a pull request for anything you would like to see changed.
