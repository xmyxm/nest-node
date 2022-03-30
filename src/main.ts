import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import * as cors from "cors";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置swagger文档
  const config = new DocumentBuilder()
    .setTitle("管理后台")
    .setDescription("管理后台接口文档")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  // 我们就可以访问：http://localhost:3000/docs,此时就能看到Swagger生成的文档

  // 参数校验
  app.useGlobalPipes(new ValidationPipe());

  // 跨域
  app.use(
    cors({
      origin: "http://localhost:8080",
      credentials: true,
    })
  );

  await app.listen(3000);
}

bootstrap();
