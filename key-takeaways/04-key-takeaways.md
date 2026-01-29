# Tổng hợp bài học số 4:

## Danh Sách Các Mục Trong Bài 4:

1. Phạm vi của Biến.
2. Beark and continue.
3. Câu Điều Kiện Nâng Cao.
4. Vòng Lặp Nâng Cao.
5. Utiils Function.
    - String utils.
    - Array.





### 1: Phạm Vi Của Biến :

    - 1.1:Phạm vi (scope) xác định nơi mà biến có thể truy cập.
    - 1.2:JavaScript có ba loại phạm vi:
        ● Block scope (khối).
        ● Function scope (hàm).
        ● Toàn cục (global).
    

**Chi tiết từng mục:**

- ***Block scope (khối):***
     - biến được khai báo trong cặp ngoặc nhọn.
     - var: không bị giới hạn bởi cặp ngoặc nhọn.
     - let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị undefined.
    - Ví dụ : 


           if (true) {

           var varVariable = "var không có block scope";

           let letVariable = "let có block scope";

           const constVariable = "const cũng có block scope";
           }
        ---> :

          console.log(varVariable); // OK - var không bị giới hạn bởi block

          console.log(letVariable); // Error: letVariable is not defined

          console.log(constVariable); // Error: constVariable is not defined


- ***Function scope (hàm):***     
    - biến được khai báo trong một hàm.
    - Cả let/var/const ra ngoài hàm đều bị undefined.
    - Ví dụ :

          function myFunction() {


          var functionScoped = "Chỉ có thể truy cập trong hàm này";

           let alsoFunctionScoped = "Tương tự";

          console.log(functionScoped); // OK

           }

           console.log(functionScoped); // Error: functionScoped is not defined 

      
- ***Toàn cục (global):*** 
    - biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm.
    - Ví dụ:

           var globalVar = "Tôi là biến toàn cục";

           let globalLet = "Tôi cũng là biến toàn cục";

           function testFunction() {

           console.log(globalVar); // Truy cập được

           console.log(globalLet); // Truy cập được

          }


### 2: Beark and continue:

**2.1:Break**

● Break: dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.

      ● Ví dụ: 

      // Thoát khi tìm thấy giá trị

        for (let i = 0; i < 10; i++) {
            if (i === 5) {
                break; // Thoát vòng lặp khi i = 5
            }
             console.log(i);
        }
          // Output: 0, 1, 2, 3, 4
      



● Break: dùng để thoát hoàn toàn khỏi vòng lặp ngay lập.

      ● Ví dụ: 

       // Ví dụ thực tế: Tìm phần tử đầu tiên
           const numbers = [1, 3, 8, 7, 9, 11];
           let firstEven = null;

           for (let num of numbers) {
                if (num % 2 === 0) {
                    firstEven = num;
                    break; // Dừng ngay khi tìm thấy
                }
            }
        
**2.2:Continue** 

● Continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.  
    ● Ví dụ: 

    // Bỏ qua số chẵn

        for (let i = 0; i < 10; i++) {
             if (i % 2 === 0) {
                 continue; // Bỏ qua số chẵn
            }
                console.log(i);
        }
            // Output: 1, 3, 5, 7, 9

    // Ví dụ thực tế: Lọc dữ liệu

        const scores = [85, 92, 78, 95, 60, 88];

        console.log("Điểm >= 80:");

        for (let i = 0; i < scores.length; i++) {
         const score = scores[i];
             if (score < 80) {

               continue; // Bỏ qua điểm < 80

            }
               console.log(score);
        }
           // Output: 85, 92, 95, 88


### 3: Câu Điều Kiện Nâng Cao:


**3.1: If...else...If:** 
   
● Kiểm tra nhiều điều kiện theo thứ tự:

    ● Ví dụ: 

       let score = 85;
       if (score >= 90) {
       console.log("Xuất sắc");
       } else if (score >= 80) {
          console.log("Giỏi");
       } else if (score >= 70) {
          console.log("Khá");
       } else if (score >= 60) {
          console.log("Trung bình");
       } else {
          console.log("Yếu");
       }


**3.2: Ternary operator:** 

   ● Toán tử điều kiện : Cách viết ngắn gọn cho if...else đơn giản.

   ● Ví dụ: 

      let age = 20;
      let status = (age >= 18) ? "Người lớn" : "Trẻ em";
      console.log(status); // "Người lớn"
      // Có thể lồng nhau (nên cẩn thận với độ phức tạp)
      let score = 75;
      let grade = score >= 90 ? "A" :
      score >= 80 ? "B" :
      score >= 70 ? "C" :
      score >= 60 ? "D" : "F";

    

### 4: Vòng Lặp Nâng Cao:

**4.1: for...in Loop:**

   ● Dùng để duyệt qua các thuộc tính (properties) của một object.

   ● Ví dụ:

    // Với Object
    const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
    };
    for (let key in person) {
    console.log(key + ": " + person[key]);
    }
    // Output:
    // name: John
    // age: 30
    // city: Hanoi


     // Với Array (không khuyến khích)
       const colors = ["red", "green", "blue"];
        for (let index in colors) {
         console.log(index + ": " + colors[index]);
        }
          // Output:
          // 0: red
          // 1: green
         // 2: blue

**4.2: forEach Method:**

 Dùng để duyệt qua các thuộc tính (properties) của một object.

● Ví dụ:

     const numbers = [1, 2, 3, 4, 5];
     numbers.forEach(function(value) {
     console.log(value);
    });
     

### 5: Utiils Function:

● Các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh hơn, gọn hơn.

    - String utils: các hàm xử lý chuỗi.

    - Array utils: các hàm xử lý mảng.



**5.1: String utils:**

- Tổng quan các loại thao tác:


      ● Bỏ khoảng trắng.

      ● Chuyển đổi chữ hoa → chữ thường và ngược lại.

      ● Kiểm tra chuỗi có bao gồm chuỗi con không.

      ● Tách chuỗi thành các phần.

      ● Thay thế ký tự trong chuỗi

      ● Array utils function : https://www.youtube.com/watch?v=gH1SZK98ipM




- **Bỏ khoảng trắng**:

    ● Dùng hàm trim

    - trim(): Bỏ khoảng trắng 2 đầu.

    - trimStart(): bỏ khoảng trắng bên trái.

    - trimEnd(): bỏ khoảng trắng bên phải.

    ● Ví dụ :

       let text = " Hello World ";

       // trim() - bỏ khoảng trắng 2 đầu
         console.log(text.trim());
      // "Hello World"

      // trimStart() - bỏ khoảng trắng bên trái
      console.log(text.trimStart());
      // "Hello World "

      // trimEnd() - bỏ khoảng trắng bên phải
      console.log(text.trimEnd());
      // " Hello World"


- **Chuyển đổi HOA → THƯỜNG**:     

     ● Chữ thường → chữ hoa: toUpperCase.

     ● Chữ hoa → chữ thường: toLowerCase.

     ● Ví dụ:
     
      let str = "JavaScript";

      str.toUpperCase(); // "JAVASCRIPT";

      str.toLowerCase(); // "javascript";

      console.log(str.toUpperCase());
      console.log(str.toLowerCase());


- **Kiểm tra chuỗi có bao gồm chuỗi con không**:

     ● Dùng hàm includes.

     ● Ví dụ:
     
      let text = "Hello World";

      // Kiểm tra chuỗi có chứa chuỗi con không
      console.log(text.includes("World"));
      // true

      console.log(text.includes("JavaScript"));

      // false

      // Phân biệt hoa thường
      console.log(text.includes("world"));
      // false

      console.log(text.includes("Hello"));
      // true 

- **Tách chuỗi thành các phần**:

    ● Dùng hàm split.

    ● Ví dụ:

       let text = "Hello World JavaScript";
       // Cắt chuỗi theo khoảng trắng
       console.log(text.split(" "));
       // ["Hello", "World", "JavaScript"]

       // ------
       let email = "user@gmail.com";

       email.split("@");
       // ["user", "gmail.com"]

       let date = "2024-01-25";
       date.split("-");
       // ["2024", "01", "25"]

- **Thay thế ký tự trong chuỗi**:

     ● Dùng hàm replace.

     ● Ví dụ:


      let text = "Hello World";

      // Thay thế chuỗi con
      console.log(text.replace("World","JavaScript"));

      // "Hello JavaScript" 
       

**5.2: Array:**

 - Tổng quan các loại thao tác với mảng:

       ● Thêm phần tử vào mảng (push, unshift, splice)

       ● Xóa phần tử khỏi mảng (pop, shift, splice)

       ● Tìm kiếm (find, filter)

       ● Biến đổi mảng (map)

       ● Sắp xếp mảng (sort)


- **Thêm phần tử vào mảng (push, unshift, splice)**: 

      ● Thêm vào cuối: push(<phần tử>)

      ● Thêm vào đầu: unshift(<phần tử>)

      ● Thêm vào giữa: splice(<vị trí>, <số phần tử cần xoá>, <phần tử cần thêm vào>)
     
     Ví dụ:

        let arr = [1, 2, 3];

       // Thêm vào cuối - push()
       arr.push(4);
      console.log(arr);
      // [1, 2, 3, 4]

      // Thêm vào đầu - unshift()
      arr.unshift(0);
      console.log(arr);
      // [0, 1, 2, 3, 4]

      // Thêm vào giữa - splice(vị trí, 0, phần tử)
       arr.splice(2, 0, 1.5);
      console.log(arr);
      // [0, 1, 1.5, 2, 3, 4]


- **Xóa phần tử khỏi mảng**: 

      ● Xóa ở cuối: pop()

      ● Xóa ở đầu: shift()

      ● Xóa ở vị trí bất kỳ: splice(<vị trí>, <số phần tử cần xóa>)
     
     Ví dụ:

        let arr = [1, 2, 3, 4, 5];

       // Xóa phần tử cuối - pop()
       arr.pop();
       console.log(arr);
       // [1, 2, 3, 4]
       

       // Xóa phần tử đầu - shift()
       arr.shift();
       console.log(arr);
       // [2, 3, 4]

       // Xóa phần tử ở vị trí bất kỳ - splice(vị trí, số lượng)
       arr.splice(1, 1);
       // Xóa 1 phần tử tại vị trí index 1
       console.log(arr);
       // [2, 4]

**Tìm kiếm (find, filter)**: 

      ●Trả về phần tử đầu tiên hợp lệ - find()

      ● Trả về tất cả các phần tử hợp lệ - filter()

Ví dụ:

        const numbers = [5, 12, 8, 130, 44];

       // find() - Trả về phần tử đầu tiên > 10

      let first = numbers.find(num => num > 10);
      console.log(first);
       // 12
       

       // filter() - Trả về tất cả phần tử > 10

      let all = numbers.filter(num => num > 10);
       console.log(all);
       // [12, 130, 44]

**Biến đổi mảng (map)**: 

      ● map: Tạo mảng mớibằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài.


Ví dụ:

       let numbers = [1, 2, 3, 4, 5];

      // Nhân mỗi phần tử với 2
       
      let doubled = numbers.map(num => num * 2);
      console.log(doubled);
       // [2, 4, 6, 8, 10]
       

**Sắp xếp mảng**: 

● sort((a, b) => a -b): 

       ● So sánh từng cặp phần tử a và b
       ● Trả về số âm: a đứng trước b 
       ● Trả về số dương: b đứng trước a
       ● Trả về 0: giữ nguyên thứ tự

     

Ví dụ:

       let numbers = [40, 100, 1, 5, 25, 10];

      // Sắp xếp tăng dần
       
      console.log(numbers);
     // [1, 5, 10, 25, 40, 100]
      

      // Sắp xếp giảm dần

      numbers.sort((a, b) => b - a);
      console.log(numbers);
      // [100, 40, 25, 10, 5, 1]

              





 







     




    
    

     

        
            



    









