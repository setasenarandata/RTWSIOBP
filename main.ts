import { App, Editor, EditorPosition, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

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
				const lines = editor.lineCount()
				
				let counter: number = 0

				for (let i=0; i < lines; i++) {
					const line = editor.getLine(i)
					if (line.charAt(0) == "-") {
						if (line.charAt(2) == " " && line.charAt(3) == " ") {
							const startPos: EditorPosition = {line: i, ch: 2}
							const endPos: EditorPosition = {line: i, ch: 4}
							editor.replaceRange('', startPos, endPos);
							counter++
						}
					}
				}

				new Notice("Success. " + counter + " lines were affected.")
			}
		})	
	}

	onunload() {

	}
}
