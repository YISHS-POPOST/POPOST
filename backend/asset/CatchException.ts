import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";

@Catch()
export default class CatchException implements ExceptionFilter {
  // ExceptionFilter 인터페이스를 구현해야 하는 함수
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response = ctx.getResponse();

    let httpError = null;
    console.log(exception);

    if (exception instanceof HttpException) {
      // status: XXX, message: 'XXX' 형식의 에러인지 판단합니다.
      httpError = {
        status: exception.getStatus(), // throw new HttpError()로 던진 첫번째 매개변수 status 값
        message: exception.message, // throw new HttpError()로 던진 두번째 매개변수 message 값
      };
    } else {
      // XXXX() is not a function와 같은 서버 자체에서의 오류일때, 서버 오류로 처리합니다.
      httpError = {
        status: 500,
        message: "서버 오류입니다.",
      };
    }

    const { status, message } = httpError;
    // 클라이언트에게 응답을 넘겨줍니다. (위 조건분기에 따른 객체의 값들)
    return response.status(status).json({
      status,
      message,
    });
  }
}
