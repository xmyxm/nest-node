import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// Nest.js 的思维方式一开始确实不容易理解，但假如你接触过AngularJS，就会感到熟悉，如果你用过 Java 和 Spring 的话，就可能会想，这不是抄的 Spring boot嘛
// AngularJS、Spring 和 Nest.js 都是基于控制反转原则设计的,而且都使用了依赖注入的方式来解决解耦问题

@Module({
  imports: [], // 导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入
  exports: [], // 导出服务的列表，供其他模块导入使用。如果希望当前模块下的服务可以被其他模块共享，需要在这里配置导出
  controllers: [AppController], // 处理 http 请求，包括路由控制，向客户端返回响应，将具体业务逻辑委托给 providers 处理
  providers: [AppService], // Nest.js 注入器实例化的提供者（服务提供者），处理具体的业务逻辑，各个模块之间可以共享（注入器的概念后面依赖注入部分会讲解）
})
export class AppModule {} // AppModule 是应用程序的根模块，根模块提供了用来启动应用的引导机制，可以包含很多功能模块
