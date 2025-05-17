import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('your-extension.helloWorld', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      editor.edit((editBuilder) => {
        editBuilder.insert(editor.document.lineAt(editor.document.lineCount - 1).range.end, 'Hello from your extension!\n');
      });
    } else {
      vscode.window.showInformationMessage('No active editor found.');
    }
  });

  context.subscriptions.push(disposable);
}
