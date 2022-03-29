import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { AppService } from "./app.service";

// 使用@Controller装饰器来定义控制器, @Get是请求方法的装饰器，对getHello方法进行修饰， 表示这个方法会被GET请求调用。
@ApiTags("主接口") // 通过@ApiTags添加标签来对 Controller 进行分类
@Controller()
export class AppController {
  // 在 app.controller.ts 中 AppController 声明了一个依赖于 AppService 令牌(token)的构造函数注入:
  constructor(private readonly appService: AppService) {}

  // 使用 @ApiOperation 装饰器,给每一个接口添加说明文字， 让使用的人直观的看到每个接口的含义
  @ApiOperation({ summary: "hello 测试接口" })
  @Get("hello")
  getHello(): string {
    // 我们可以看出使用 @Injectable 修饰后的 AppService, 在 AppModule 中注册之后，在 app.controller.ts 中使用，我们就不需要使用 new AppService() 去实例化，直接引入过来就可以用
    return this.appService.getHello();
  }

  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, http://localhost:3000/app/user_xxx
  @Get("user_*")
  getUser() {
    return "getUser";
  }

  // 3.带参数路径
  // 可以匹配到put请求，http://localhost:3000/app/list/xxxx
  @Post("list/:id")
  update() {
    return "update";
  }
}
