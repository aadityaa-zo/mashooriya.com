export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: FormData = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }
    console.log("fields are okay")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("env clear");

// const htmlEmail=`
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>form</title>
//     <link href="https://fonts.googleapis.com/css2?family=Khand:wght@400;600;700&display=swap" rel="stylesheet">

//     <style>
//         * {margin: 0;padding: 0;box-sizing: border-box;font-family: "Khand", sans-serif;}

//         body {background: #1A2027;display: flex;flex-direction:column;justify-content: center;align-items: center;min-height: 100vh;padding: 20px;}

//         .form-container {width: 100%;max-width: 65%;}
//         .input-box {position: relative;margin-bottom: 45px;border: 6px solid #AE9FFF;padding: 1rem;}
//         .label {position: absolute;top: -1.8rem;left: 0.7rem;background: #AE9FFF;color: #1A2027;padding: 0 1rem;font-size: 1.6rem;font-weight: 700;transform: rotate(-6deg);}

//         .label p,
//         .btn p {margin-top: 3px;}

//         .input-box input,
//         .input-box textarea:not(.lined-input) {width: 100%;border: none;outline: none;background: transparent;font-size: 2.1rem;font-weight: 700;color: #AE9FFF;padding: 0;margin: 0;line-height: 2.5rem;}

//         .input-box textarea:not(.lined-input) {resize: vertical;height: 100px;padding-top: 2px;line-height: 2.8rem;}

//         .line {position: absolute;left: 1rem;right: 1rem;height: 6px;background: #AE9FFF;}

//         .input-box .line {bottom: 1rem;}


//         .message-card {position: relative;border: 6px solid #AE9FFF;padding: 0.9rem 1rem 1rem 1rem;background-color: #1A2027;margin-bottom: 45px;}

//         textarea.lined-input {width: 100%;height: 200px;box-sizing: border-box;background-color: #1A2027;border: none;outline: none;resize: none;padding: 0;font-family: "Khand", sans-serif;font-weight: 700;font-size: 2.1rem;line-height: 2.8rem;color: #AE9FFF;text-transform: none;background-image: repeating-linear-gradient(transparent,transparent 2.6rem,#AE9FFF 2.6rem,#AE9FFF 3rem);background-attachment: local;}

//         textarea.lined-input::placeholder {color: #AE9FFF;opacity: 1;}
//         input::placeholder {color: #AE9FFF;opacity: 1;  }


//         .btn {width: 100%;background: #AE9FFF;color: #1A2027;border: none;font-size: 2.2rem;font-weight: 700;cursor: pointer;}

//         @media(max-width:768px) {.form-container {max-width: 80%;} }

//         @media(max-width:468px) { .form-container { max-width: 100%;  }  }
      
//        .footer { text-align: center; padding: 30px; font-size: 14px; color: #888; }
//             .footer img { height: 60px; margin-bottom: 15px; }
//             .footer a { color: #9f7aea; text-decoration: none; }
   
//     </style>
// </head>

// <body>

//     <div class="form-container">
//         <form>
//             <div class="input-box">
//                 <span class="label">
//                     <p>EMAIL</p>
//                 </span>
//                 <input type="email" placeholder="ENTER YOUR EMAIL" value="${name}" readonly>
//                 <div class="line"></div>
//             </div>


//             <div class="input-box">
//                 <span class="label">
//                     <p>NAME</p>
//                 </span>
//                 <input type="text" placeholder="ENTER YOUR NAME"  value="${email}" readonly>
//                 <div class="line"></div>
//             </div>


//             <div class="message-card">
//                 <span class="label">
//                     <p>MESSAGE</p>
//                 </span>
//                 <textarea class="lined-input" placeholder="ENTER YOUR MESSAGE" defaultValue="" readonly>${message}</textarea>
//             </div>


//             <button type="submit" class="btn">
//                 <p>REPLY</p>
//             </button>

//     </div>
//     <div class="footer">
            
//     <svg xmlns="http://www.w3.org/2000/svg" id="animatedLogo" version="1.1" viewBox="0 0 848.6 645.3" fill="#FCFCFC" style="&#10;    fill: #AE9FFF;&#10;">
//   <!-- Generator: Adobe Illustrator 29.7.0, SVG Export Plug-In . SVG Version: 2.1.1 Build 138)  -->
//   <g>
//     <rect x="112.3" y="492.7" width="62.6" height="142.6"/>
//     <polygon points="544.1 368.9 410.5 319.3 410.4 319.3 435.2 252.7 568.9 302.3 544.1 368.9"/>
//     <polygon points="633.1 492.7 681.7 492.7 681.7 635.3 633.1 635.3 633.1 635.3 517.1 635.3 540.8 377.8 406.4 523 273.3 383.5 300.5 635.3 174.9 635.3 174.9 492.7 181.8 492.7 179 490.5 179 490.5 116.5 440.7 205.4 329.2 267.9 379 272.6 382.7 267.3 365 319.9 349.3 267.3 365 247 297 383.7 256.2 404 324.2 403.9 324.2 406 331.2 410.5 319.3 544.1 369 540.9 377.8 556.9 366.4 556.9 366.4 613.4 326.2 696 442.5 639.4 482.7 639.5 482.7 625.4 492.7 633.1 492.7 633.1 492.7"/>
//   </g>
//   <g id="base">
//     <polygon points="625.6 492.7 633.3 492.7 633.3 635.3 517.3 635.3 541.1 377.8 406.6 523 273.5 383.5 300.8 635.3 175.2 635.3 175.2 492.7 182 492.7 179.2 490.5 268.1 379 272.8 382.7 267.5 365 404.2 324.2 406.3 331.2 410.7 319.3 544.4 369 541.1 377.8 557.1 366.4 639.7 482.7 625.6 492.7"/>
//   </g>
//   <g id="r1">
//     <rect id="rect1" x="633.3" y="492.7" width="78.8" height="142.6"/>
//   </g>
//   <g id="r2">
//     <rect id="rect2" x="580.4" y="296.8" width="194.9" height="142.6" transform="translate(-88 460.4) rotate(-35.4)"/>
//   </g>
//   <g id="r3">
//     <rect id="rect3" x="439.2" y="217.7" width="117.7" height="142.6" transform="translate(53.7 655.3) rotate(-69.6)"/>
//   </g>
//   <g id="l3">
//     <rect id="rect4" x="229.6" y="105.3" width="142.6" height="244.4" transform="translate(-52.5 95.6) rotate(-16.6)"/>
//   </g>
//   <g id="l2">
//     <rect id="rect5" x="97.3" y="320.3" width="142.6" height="141" transform="translate(-242.1 279) rotate(-51.4)"/>
//   </g>
//   <g id="l1">
//     <rect id="rect6" x="50" y="492.7" width="125.1" height="142.6"/>
//   </g>
// </svg>

//     <p>
//                 MASHORIYA DESIGN STUDIO — <a href="https://mashooriya.com">mashooriya.com</a><br>
//                 © 2025 All Rights Reserved.
//               </p>
//             </div>
// </body>

// </html>
// `

const htmlEmail = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Form Submission</title>
          <style>
            /* Paste the entire <style> block from above here */
            body { margin: 0; padding: 0; background-color: #0d0d1a; font-family: 'Arial', sans-serif; color: white; }
            .container { max-width: 600px; margin: 40px auto; background-color: #121223; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); }
            .header { background: linear-gradient(135deg, #6b46c1, #9f7aea); padding: 30px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 1px; }
            .content { padding: 40px; }
            .field { margin-bottom: 30px; }
            .label { display: block; font-size: 12px; font-weight: bold; color: #9f7aea; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
            .box { background-color: #1a1a2e; border: 2px solid #6b46c1; border-radius: 8px; padding: 16px 20px; font-size: 18px; color: white; min-height: 50px; word-wrap: break-word; }
            .message-box { min-height: 120px; white-space: pre-wrap; }
            .reply-btn { display: block; width: fit-content; margin: 40px auto 20px; padding: 16px 60px; background-color: #9f7aea; color: white; text-align: center; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 8px; box-shadow: 0 4px 15px rgba(159, 122, 234, 0.4); }
            .footer { text-align: center; padding: 30px; font-size: 14px; color: #888; }
            .footer img { height: 60px; margin-bottom: 15px; }
            .footer a { color: #9f7aea; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">NEW FORM SUBMISSION</div>

            <div class="content">
              <div class="field">
                <span class="label">Name</span>
                <div class="box">${name}</div>
              </div>

              <div class="field">
                <span class="label">Email</span>
                <div class="box">${email}</div>
              </div>

              <div class="field">
                <span class="label">Message</span>
                <div class="box message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <a href="mailto:${email}" class="reply-btn">REPLY</a>
            </div>

            <div class="footer">
              <img src="https://via.placeholder.com/150x60/9f7aea/ffffff?text=Your+Logo" alt="Logo">
              <p>
                MASHORIYA DESIGN STUDIO — <a href="https://mashooriya.com">mashooriya.com</a><br>
                © 2025 All Rights Reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
    `;

    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlEmail,
    });
    console.log("sent")
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
