# Tổng hợp bài học số 1:

## Danh Sách Các Mục Trong Bài 1:
1. Playwright.
2. Git và Git Hub.
    - Cấu hình.
    - Kết nối với GitHub.
3. Cài đặt Playwright.
4. Đưa code lên Github.
     - Tạo Repo.
     - Khởi Tạo.
     - Push code.
     - Invite collaborators.


### Playwright :
    ● Là một framework

    ● Tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên.

    ● https://playwright.dev/

    ● Ra đời 31/01/2020

 ### Git và GitHub : 
     ● Git: quản lý source code.

     ● Github: chia sẻ code, làm việc nhóm.


**2.1: Cấu hình Git**

   - Config username (tên người dùng):
       
         - git config --global user.name “<tên bạn>”
   - Config email (địa chỉ email):
       
         - git config --global user.email “<email của bạn>”  



- Config branch default (nhánh mặc định):

         - git config --global init.defaultBranch main      



**2.2: Kết nối với GitHub**

- SSH key: 

      - Cặp khóa (2 cái)

          - id_rsa và id_rsa.pub.

          - id_rsa: cần giữ bí mật.
    
          - id_rsa.pub : có thể gửi cho người khác.
   

      - Giúp xác thực đăng nhập trở nên dễ dàng hơn.

      - Lưu ở ~/.ssh.

      - “~” đại diện cho thư mục home.

- Lệnh tạo SSH Keys:

       - ssh-keygen -t rsa -b 4096 -C"your_email@example.com" 


- Lấy nội dung ssh key:

       - cat ~/.ssh/id_rsa.pub.

       - Truy cập: https://github.com/settings/ssh/new để thêm ssh key.


 ### Cài đặt Playwright :    

   - Tạo thư mục: demo-1.
   - Mở thư mục bằng Vs code

   - Mở terminal lên.

   - Chạy lên:

         - npm init playwright@latest
         - liên tục gõ "Enter" cho tới khi hiển thị.


### Đưa code lên Github :
    
**4.1: Tạo Repo**    

   
       - git init
       - git remote add origin <url>
       - git add .
       - git commit -m ”<message>”
       - git push origin main

      - Truy cập: https://github.com/new
      - Điền tên repository
      - Chọn “Public”

**4.2: Khởi Tạo**  

      - Khởi tạo repo local: git init

      - Liên kết repo vừa tạo với Git: git remote add origin<ssh_link>

      - Thêm code: git add .

      - Thêm commit: git commit -m"init project"


**4.3: Push code** 
   
      - git push origin main


**4.4: Invite collaborators** 

     - Truy cập repo setting: https://github.com/<username>/<repo_name>/settings/access
     
     - Add collaborator

