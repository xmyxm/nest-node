import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiProperty } from "@nestjs/swagger";
import { AppService } from "./app.service";

class LogintDto {
  @ApiProperty({ description: "用户名称" })
  readonly name: string;

  @ApiProperty({ description: "密码" })
  readonly pwd: string;
}

@ApiTags("用户中心") // 通过@ApiTags添加标签来对 Controller 进行分类
@Controller("user")
export class UserController {
  constructor(private readonly appService: AppService) {}

  // 使用 @ApiOperation 装饰器,给每一个接口添加说明文字， 让使用的人直观的看到每个接口的含义
  @ApiOperation({ summary: "查询用户信息接口" })
  @Get("getUserInfo")
  getNote(): string {
    return "qa";
  }

  @Post("Login")
  Login(@Body() post: LogintDto): boolean {
    return true;
  }
}
