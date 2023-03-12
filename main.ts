import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		this.addCommand({
			id: "rtwsiobp",
			name: "Remove Trailing Whitespace",
			editorCallback: (editor: Editor) => {
				const selection = editor.getSelection()
				
				let bullet = 0;
				let remBool = false;

				for (let i=0; i < selection.length; i++) {
					if (remBool == false && selection.charAt(i) == "-") {
						remBool = true
						bullet++
					}

					if (remBool) {
						if (selection.charAt(i) == ' ') {
							console.log ("I found white spaces")
						}
					}
				}
				console.log(bullet)
			}
		})	
	}

	onunload() {

	}
}
