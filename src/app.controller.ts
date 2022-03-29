import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

// 使用@Controller装饰器来定义控制器, @Get是请求方法的装饰器，对getHello方法进行修饰， 表示这个方法会被GET请求调用。

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // 我们可以看出使用 @Injectable 修饰后的 AppService, 在 AppModule 中注册之后，在 app.controller.ts 中使用，我们就不需要使用 new AppService() 去实例化，直接引入过来就可以用
    return this.appService.getHello();
  }
}
