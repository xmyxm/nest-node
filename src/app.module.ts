import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from "./user.controller";
import { AppService } from "./app.service";

// Nest.js 的思维方式一开始确实不容易理解，但假如你接触过AngularJS，就会感到熟悉，如果你用过 Java 和 Spring 的话，就可能会想，这不是抄的 Spring boot嘛
// AngularJS、Spring 和 Nest.js 都是基于控制反转原则设计的,而且都使用了依赖注入的方式来解决解耦问题

@Module({
  imports: [], // 导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入
  exports: [], // 导出服务的列表，供其他模块导入使用。如果希望当前模块下的服务可以被其他模块共享，需要在这里配置导出
  controllers: [AppController, UserController], // 处理 http 请求，包括路由控制，向客户端返回响应，将具体业务逻辑委托给 providers 处理
  providers: [AppService], // Nest.js 注入器实例化的提供者（服务提供者），处理具体的业务逻辑，各个模块之间可以共享
})
export class AppModule {} // AppModule 是应用程序的根模块，根模块提供了用来启动应用的引导机制，可以包含很多功能模块

// 在 app.module.ts 中，我们将标记 AppService 与 app.controller.ts文件中的 AppService 类相关联。 我们将在下面确切地看到这种关联（也称为注册）的发生方式
// 当 Nest IoC 容器实例化 AppController 时，它首先查找所有依赖项*。 当找到 AppService 依赖项时，它将对 AppService令牌(token)执行查找，并根据上述步骤（上面的＃3）返回 AppService 类。 假定单例范围（默认行为），Nest 然后将创建 AppService 实例，将其缓存并返回，或者如果已经缓存，则返回现有实例
