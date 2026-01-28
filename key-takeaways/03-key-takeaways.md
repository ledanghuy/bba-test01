# Tổng hợp bài học số 3:

## Danh Sách Các Mục Trong Bài 3:
1. Git.
   - Undo Action.
   - Pull Code.
   - Branching Model.
2. JavaScript Basic.
   - Convention.
   - Object 
   - Array.
   - Logical operator.
   - Function.


### Git :

**1.1: Undo Action:**

     ● git commit --amend: lệnh dùng để chỉnh sửa commit gần nhất.

     ● git commit --amend -m”<message>” :sửa commit message của comit gần nhất ( Không tạo commit mới).

     ● git restore --staged <file_name>: đưa file được chọn từ vùng Staging Area về Working Directory.

     ● git restore --staged . : đưa tất cả các file Staging Area về Working Directory.

     ● git commit -m “message” : Lệnh này dùng để chuyển các file từ vùng Staging Area lên Repository kèm theo tin nhắn mô tả. (như ***chore*** :sửa nhỏ lẻ.., ***feat*** : thêm tính năng hoặc test case mới, ***fix*** : sửa lỗi 1 test trước đó).

     ● git reset HEAD~N : reset N commit gần nhất ( đưa các file nằm trong N commit gần nhất từ vùng Repository về vùng Working Directory).


**1.2: Git: pull code:**

    ● git pull origin main : lấy toàn bộ commit mới nhất từ nhánh main về máy và gộp vào nhánh hiện tại. (Lấy code từ server về)

**1.3: Git Branch**

    ● Sử dụng nhanh branch để tạo ra các phiên bản riêng của code, tránh ảnh hưởng đến bản gốc.

    ● git config --global init.defaultBranch main : Cài đặt tên nhánh mặc định là main và áp dụng cho toàn bộ user trên máy dùng.

    ● git branch: Liệt kê tên các nhanh hiện tại.
      - Dấu * là nhánh đang đứng hiện tại 
      - Cần có ít nhất 1 commit mới hiện danh sách nhánh.


    ● git branch <tên_branch> : tạo ra nhánh mới , nhánh mới trỏ tới commit hiện tại nhưng không chuyển sang nhánh mới.Bạn vẫn đang đứng ở nhanh cũ.

    ● git checkout <tên_branch>: chuyển sang nhánh mới.

    ● git checkout -b <tên>: vừa tạo vừa chuyển sang nhánh mới.

    ● git branch -D <tên nhánh> : xóa nhánh hiện tại ( bạn phải đứng ở nhánh khác trước khi xóa).

    ● File .gitignore là giúp bạn chỉ định những file và thư mục nào sẽ không được dịch chuyển. 

 


### JavaScript Basic :

**2.1: Convention**

    - Quy tắc đặt tên: 
        ● kebab-case: đặt tên file và folder.
        ● camelCase: đặt tên biến, hàm.
        ● PascalCase: đặt tên class.
        ● Ví dụ : 
   
        - Console.log :
        ● console.log(‘Toi la Nga’);
        ● console.log(“Toi la Phong”);
        ● console.log(`${variable_name}`)
        ● let name = “Nga”;
        ● console.log(`Toi la ${name}`);
        ● console.log(“Toi ten la” + name+ “”)


**2.2: Object**

    ● Là một trong những kiểu dữ liệu trong JavaScript , dùng để lưu trữ dữ liệu dưới dạng key-value 
    ● Ví dụ :
         - Object:
              const sinhVien = {
              name:"ABC",
              age:20,
              address:"Ha Noi"

         }; 

         - Object lồng nhau : 

              const sinhVien = {
              name:"ABC",
              age:20,
              address:
              {
                 diachi:"Adsada",
                 quequan:"Ha Noi"

              }
         }; 

         - Hiển thị ra: 
               console.log("name = " + sinhVien.name);
               console.log("dia chi " +sinhVien.address.name);
               console.log(“Age  “, sinhVien[“age”]);
         
**2.3: Array**

    ● kiểu dữ liệu dùng để lưu nhiều giá trị trong một biến, các phần tử được sắp xếp theo chỉ số (index), bắt đầu từ 0.

    ● Tạo mảng : 
        - Khai báo.
        - Sử dụng.

    ● Truy xuất mảng:
        - Độ dài mảng: length
        - Lấy phần tử theo index: [0], [1], [2]

    ● Ví du : 
         const students =
        [

        { name: "Huy", score: 1 },
        { name: "AN", score: 3 },
        { name: "Bình", score: 4 },
        { name: "Cường", score: 8 },
        { name: "Dũng", score: 7 },
        { name: "Hòa", score: 9 },
        { name: "Phong", score: 2 },
        { name: "Giang", score: 10 }

        ]; 

       ● Ví dụ :
         const daySo=[1,2,45,7,8,1,4];
       
**2.4: Logical operator**

    ● Dùng để kết hợp hoặc phủ định các điều kiện và trả về true/ false.

    ● Các kiểu :

         - && : cả 2 vế của mệnh đề đều đúng.

         - || : một trong 2 vế đúng.

         - ! : đảo ngược lại giá trị của mệnh đề.

    

      
**2.5: Function** 

    ● là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.

    ● Ví dụ: 
           - Cách Khao báo : 

           function <nameFunction>()          
           {
                 /// code ben trong
           }   --> Không có tham số.

           function <nameFunction>(a)          
           {
                 /// code ben trong
                 
           }   --> Có tham số a.



    ● Return value nằm trong function.     

