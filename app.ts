// https://deno.land/x/oak@v16.1.0
import { Application } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import todoRoutes from "./routes/todoList.ts";
const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello CFW!";
// });

app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

await app.listen({ port: 8000 });
