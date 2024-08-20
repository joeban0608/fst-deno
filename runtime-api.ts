const text = "This is a test - it should be store to a file!";

// 課程範例：
const encoder = new TextEncoder();
const data = encoder.encode(text)
Deno.writeFile('message-classes.txt', data).then(()=>{
  console.log('Write the file!')
})


// 官方範例：

const WriteText = async (path: string, text: string) => {
  await Deno.writeTextFile(path, text);
};
WriteText("message-official.txt", text);
