import { Controller, Get, Query, Res } from '@nestjs/common';
import { TokenAgoraService } from './token-agora.service';

@Controller('resocial/api/v1')
export class TokenAgoraController {
    constructor(private readonly tokenService: TokenAgoraService) { }

    @Get("/generate/token")
    generateToken(@Res() res, @Query() query): string {
        const channelName = query.channelName;
        if (!channelName) {
            return res.status(500).json({ 'error': 'channel is required' });
            //?channelName=nk&uid=0&role=publisher&expireTime=2
        }

        // get uid 
        let uid = query.uid;
        if (!uid || uid == '') {
            uid = 0;
        }

        // get the expire time
        let expireTime = query.expireTime;
        if (!expireTime || expireTime == '') {
            expireTime = 3600;
        } else {
            expireTime = parseInt(expireTime, 10);
        }

        return this.tokenService.generateToken(res,channelName, uid, query.role, expireTime);
    }
}
