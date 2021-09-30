import { Injectable } from '@nestjs/common';
import { RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole } from 'agora-access-token';
require('dotenv').config();

@Injectable()
export class TokenAgoraService {

    generateToken(res:any,channelName:string , uid:number , qRole: string , expireTime:number): string {

//token?channelName=by&uid=0&role=publisher&expireTime=3600

        //get app id and certificate from agora.io
        const APP_ID = process.env.APP_ID;
        const APP_CERTIFICATE = process.env.APP_CERTIFICATE;

        // get role
        let role = RtcRole.SUBSCRIBER;
        if (qRole == 'publisher') {
            role = RtcRole.PUBLISHER;
        }

        // calculate privilege expire time
        const currentTime = Math.floor(Date.now() / 1000);
        const privilegeExpireTime = currentTime + expireTime;
        // build the token
        const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
        // return the token
        return res.json({ 'token': token });
        
    }
}
