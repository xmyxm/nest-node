import { Injectable } from "@nestjs/common";

// 凡被 @Injectable 装饰的类 都是Providers，他们都可以通过 constructor 注入依赖关系，这意味着对象可以彼此创建各种关系，并且“连接”对象实例的功能在很大程度上可以委托给 Nest运行时系统。 Provider 只是一个用 @Injectable() 装饰器注释的类
// 在 app.service.ts 中 @Injectable() 装饰器声明 CatsService 类是一个可以由Nest IoC容器管理的类
@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
