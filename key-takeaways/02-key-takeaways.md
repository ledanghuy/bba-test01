# Tổng hợp bài học số 2:

## Danh Sách Các Mục Trong Bài 2:
1. Version control system.

2. Git.
   - Môi trường.
   - Cấu hình.
   - Các lệnh trong Git.
   - Commit Convention.
   - Simple Workflow.
  
3. JavaScript basic.
   - Javascript la gì.
   - Chương trình đầu tiên: " Hello World!".
   - Comment.
   - Biến.
   - Hằng.
   - Kiểu dữ liệu.
   - Các toán tử.
   - Câu điều kiện: if
   - Vòng lặp: for (i)

### Version control system :

    ● Hệ thống quản lý phiên bản.

        - Xem lịch sử thay đổi (thời gian, thay đổi gì, ai thay đổi,...).

        - Quay trở về bản thay đổi trước đó.

        - Local: Lưu ở máy cá nhân.

        - Centralize: Lưu ở một máy chủ tập trung.

        - Distributed: Lưu ở nhiều máy khác nhau.

### Git:
**2.1: Undo Action:**
 ●  Git có 3 môi trường làm việc chính là:

     - Working Directory.

     - Staging Area.

     - Repository.

**2.2: Cấu hình Git:**

   ●  Cấu hình global: 

    - git config --global user.name"Tên bạn"
    - git config --global user.email "email của bạn"

   ●  Tạo repo khác :

    - git config user.name "Alex"
    - git config user.emal "alex@gmail.com"
   
**2.3:Các lệnh trong Git:**
   ●  Git init: 

         - Lệnh dùng để khởi tạo 1 repository mới trong Git.
         - file ở trong vùng Working Directory (chỉ tạo ra thư mục git).

   ●  Git add <file_name> : 
           
           - Lệnh dùng để đưa file từ vùng Working Directory vào trong vùng Staging Area.

   ●  git add . : 

            - Lệnh dùng để đưa toàn bộ tất cả các file ( file mới lẫn file thay đổi  ) từ vùng Working Directory vào trong vùng Staging Area. 

   ●  git commit -m “message” : 
           
           - Lệnh này dùng để chuyển các file từ vùng Staging Area lên Repository kèm theo tin nhắn mô tả. 

           - chore :sửa nhỏ lẻ.

           - feat :thêm tính năng hoặc test case mới.

           - fix :sửa lỗi 1 test trước đó.

   ●  git status : 
         
         - xem trạng thái của file 

         - file màu xanh : vùng staging.

         - file màu đỏ : vùng working directory.

   ●  git log: 
   
         - kiểm tra danh sách commit.

**2.4:Commit Convention:**

   ● Dùng convention sau : 

       - <Type> : <short_desciption>
        
   ● Type:

         - chore :sửa nhỏ lẻ.

         - feat :thêm tính năng hoặc test case mới.

         - fix :sửa lỗi 1 test trước đó.

   ● Short_desciption:
    
        - mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.
   

   ●  Ví dụ:

       - “chore: remove unused file”

       - “feat: add code for exercises 2”

       - “fix: fix automation for case
      

**2.5:Simple Workflow:**
     
   ● Không dùng global config.
  
       - init-> config-> add-> commit-> push.

   ● Dùng global config.
        
         - init-> add-> commit-> push.


### JavaScript basic:

**3.1:Javascript la gì :**

    ● Là một ngôn ngữ lập trình.

    ● Ra đời năm 1995 bởi Brendan Eich.

    ● Top langgue: https://survey.stackoverflow.co/2025/technology#1-programming-scripting-and-markup-languages

    ● Giúp cho browser hoạt động được.


**3.2:Chương trình đầu tiên: " Hello World!:**

   ● Chương trình máy tính mà đầu ra là dòng chữ "Hello, world!" trên thiết bị hiển thị.

   ● Cú Pháp:

      - console.log(“nội dung”); 
      - console.log(‘nội dung’);

**3.3:Comment:**

   ●  Là cách " vô hiệu hóa " tạm thời 1 đoạn code.

   ● Dòng code được comment sẽ bị bỏ qua, không được thực thi.
   
   ● Có 2 cách comment: 
      
      - Comment 1 dòng : thêm // vào trước đoạn code muốn comment.
      - Ví dụ : 

              // const name = “Better Bytes Academy”

             Có thể thêm vào giữa dòng : const name = “Playwright Việt Nam” // Declare name variable

      - Comment nhiều dòng : thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng
      - Ví dụ :  
             
              /*
             const name = “Phong”;
             console.log(name);
              */

       
**3.4:Biến:**

 ●  Biến: biến trong từ biến thiên , có nghĩa là có thể thay đổi được. 

 ●  Có  2 biến là let và var:

    - Giống nhau : đề là để khai báo biến.
    - Khác nhau : 

        - var:  phạm vi hoạt động của var : phạm vi hàm , dễ gây lỗi ngoài ý muốn.

        - let: ra đời sau, phạm vi hoạt động khối ,an toàn.

        - var có thể khai báo lại còn let thì không.

 ● Ví dụ:

    - var centerName = “Better Bytes Academy”;
    - let isLovePlaywright = true;



**3.5:Hằng:**

 ● Hằng số : const: các giá trị không thay đổi được.

 ● Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc
giá trị chỉ dùng một lần.

 ● Khai báo : <từ khoá> <tên hằng> = <giá trị> 

 ● Sử dụng <từ khóa>  const.

 ● Ví dụ:

    - const slogan = “Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình”


**3.6:Kiểu dữ liệu:**


● Kiểu dữ liệu: 

- Kiểu nguyên thủy: 

   - Number : Số nguyên và số thực (không phân biệt int/float)
   - Ví dụ: 

         - const age = 25; // Số nguyên
         -  const price = 19.99; // Số thực
         -  const infinity = Infinity; // Vô hạn
         -  const notANumber = NaN; // Không phải là số

    - String:  Chuỗi ký tự.
    - Ví dụ: 

          - const name = "John"; // Dùng nháy kép
          - const message = 'Hello'; // Dùng nháy đơn
          - const template = `Age: 10`; // Dùng “backtick” (dấu huyền cạnh số 1)

     - Boolean: Giá trị logic

     - Ví dụ: 

           - const isActive = true; // Giá trị đúng
           - const isComplete = false; // Giá trị sai


     - Undefined
     - Null
     - Symbol
     - BigInt

- Kiểu Tham chiếu:
     
    - Object
   
 **3.7:CácToán tử so sánh:**

 - Toán Tử so sánh :

        - So sánh bằng  == và === ( nên dùng ===  cho an toàn)
        - So sánh không bằng : !===
        - So sánh lớn hơn , nhỏ hơn 
               - >
               - <
               - <=
               - >=
- Toán tử logic:

       - && ( and ): trả về đúng nếu cả 2 vế của mệnh đề đều đúng.
       - || ( or) : trả về đúng nếu 1 trong 2 vế của mệnh đề đúng.\
       - ! : đảo ngược lại giá trị của mệnh đề.

- Toán tử 1 ngôi:
      
      - Ví dụ: let x =5; 
           - x++ : toán tử nằm trước tăng trước , trả về sau.

           - ++x  : toán tử nằm ở phía sau trả về trước, tăng sau.

           - x-- :toán tử nằm trước giảm trước , trả về sau.

           - --x :  toán tử nằm ở phía sau trả về trước, giảm sau.


      - Ví dụ: 
          let a = 10;

          b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11

         let c = 10;

         d = c++; // trả về giá trị 10 cho d rồi mới tăng // => d có giá trị là 10

- Toán tử toán học: 

       -  + ,-, *, /

 **3.8: Câu điều kiện:**
  - If (){} else {} : nếu điều kiện đúng thì mới chạy
  - Ví dụ :

            let hour = 8;
            if (hour >= 6) {
               if (hour <= 11) {
                   console.log(“Good morning”);
               }
           }


**3.9 :Vòng lặp:**
 - Vòng lặp dùng để lặp lại 1 đoạn logic.
 - Cú pháp : 
      
          for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
       // code
        }

- Ví dụ:
 
           for (let i = 0;i < 5; i++) {
               console.log("Xin chào!")
             }














