// https://deno.land/x/oak@v16.1.0
import { Application } from "https://deno.land/x/oak@v16.1.0/mod.ts";
const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello CFW!";
});

await app.listen({ port: 3000 });
