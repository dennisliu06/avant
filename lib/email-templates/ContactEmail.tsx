export function getContactEmailHTML(name: string, email: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Name:</strong><br>
              <span style="color: #333;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Email:</strong><br>
              <a href="mailto:${email}" style="color: #3498db;">${email}</a>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Message:</strong><br>
              <span style="color: #333; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
            </p>
          </div>
          
          <p style="color: #7f8c8d; font-size: 12px; margin-top: 30px;">
            This email was sent from your avantmgmt.co.
          </p>
        </div>
      </body>
    </html>
  `;
}