import axios from "axios";
import { history } from "../../App";
import { TOKEN_MOVIE } from "../../ulti/setting";

export const dangKy = (thongTinND)=>{

    return (dispatch2)=>{
        let promise = axios({
            method: "post",
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            },
            data:thongTinND
        });

        promise.then((result) => { 
            //lay data thanh cong
            console.log({result})
            // chuyen nguoi dung sang login
            alert('Dang ky thanh cong roi, chuan bi login di')
            history.push('/login')
         })
        
         promise.catch((error) => { 
           console.log({error})
         })

    }

}