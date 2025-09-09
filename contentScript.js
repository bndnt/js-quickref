const content = document.getElementById("content");
content.innerHTML = `<div class="container">
      <div class="pageCover">
        <h1>Шпори на JS <br />без смс та реєстрації</h1>

        <div class="blockLine">
          <img class="titleImg" src="./images/girlHacker.png" alt="img" />
        </div>
        <h2>Рядки</h2>
        <div class="blockTopic">
          <h3>Довжина рядка</h3>
          <p>Властивості — це описові характеристики сутності.</p>
          <p>
            Для доступу до властивості (property) сутності (objectName)
            використовується синтаксис із крапкою:
          </p>
          <code>сутність.властивість</code>
          <p>
            Наприклад, щоб отримати довжину рядка, ми можемо використовувати
            властивість length таким чином:
          </p>
          <code>
            const productName = "Repair droid"; // Якщо у змінній зберігається
            рядок
            <br />console.log(productName.length); // 12 <br />// Якщо рядковий
            літерал <br />console.log("Repair droid".length); // 12
          </code>
        </div>
        <div class="blockTopic">
          <h3>Методи рядків</h3>
          <h4>Методи toLowerCase() і toUpperCase()</h4>
          <p>
            Метод toLowerCase() повертає новий рядок, у якому всі символи
            вихідного рядка перетворені в нижній регістр.
          </p>
          <code
            >const message = "Welcome to Bahamas!";<br />
            console.log(message.toLowerCase()); // "welcome to bahamas!"<br />
            console.log(message); // "Welcome to Bahamas!"
          </code>
          <p>
            Метод toUpperCase() повертає новий рядок, у якому всі символи
            вихідного рядка перетворені у верхній регістр.
          </p>
          <code
            >const message = "Welcome to Bahamas!";
            console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
            console.log(message); // "Welcome to Bahamas!"
          </code>
        </div>
        <div class="blockTopic">
          <h4>Метод slice()</h4>
          <p>
            Метод slice() використовується для створення копії частини або
            всього рядка без зміни оригінального рядка. Він дозволяє витягувати
            підрядок з вихідного рядка, вказуючи початковий та кінцевий індекси.
            Синтаксис методу slice() виглядає так:
          </p>
          <code>str.slice(startIndex, endIndex)</code>
          <ul>
            де:
            <li>str — вихідний рядок, з якого робитиметься копія.</li>
            <li>
              startIndex — індекс, з якого починається копіювання елементів
              рядка.
            </li>
            <li>
              endIndex — індекс, до якого (не включаючи) йде копіювання
              елементів рядка.
            </li>
          </ul>
          <p>
            Метод slice() копіює підрядок із вихідного рядка, починаючи з
            індексу startIndex і до (не включаючи) індексу endIndex, і повертає
            цю копію як новий рядок.
          </p>
          <code
            >const fullName = "Jacob Mercer";<br />
            console.log(fullName.slice(0, 4)); // 'Jaco'<br />
            console.log(fullName.slice(3, 9)); // 'ob Mer'<br />
            console.log(fullName.slice(0, fullName.length)); // 'Jacob
            Mercer'</code
          >
          <p>
            Параметр endIndex є необов'язковим. Якщо endIndex не вказаний,
            витягуються всі елементи до кінця рядка.
          </p>
          <code
            >const fullName = "Jacob Mercer";<br />
            console.log(fullName.slice(1)); // 'acob Mercer'<br />
            console.log(fullName.slice(3)); // 'ob Mercer'</code
          >
          <p>
            Якщо викликати метод slice() без аргументів, він створює точну копію
            рядка і повертає її.
          </p>
          <code
            >const fullName = "Jacob Mercer"; <br />
            console.log(fullName.slice()); // 'Jacob Mercer'
          </code>
          <p>
            Результат виклику методу slice() можна зберігати в змінній для
            подальшого використання.
          </p>
          <code
            >const fullName = "Jacob Mercer";<br />
            const firstName = fullName.slice(0, 5);<br />
            const lastName = fullName.slice(6);<br />

            console.log(fullName); // "Jacob Mercer"<br />
            console.log(firstName); // "Jacob"<br />
            console.log(lastName); // "Mercer"</code
          >
          <mark>
            Метод slice() корисний, коли потрібно отримати певну частину рядка
            або створити копію для подальшого використання, не змінюючи вихідний
            рядок.
          </mark>
        </div>
        <div class="blockTopic">
          <h4>Метод includes()</h4>
          <p>
            Метод рядків includes() використовується для перевірки наявності
            підрядка у рядку. Він повертає логічне значення true, якщо підрядок
            знайдено, і false, якщо підрядок відсутній.
          </p>
          <p>Синтаксис методу includes() виглядає так:</p>
          <code>str.includes(substring) </code>
          <ul>
            <span>де:</span>
            <li>str — вихідний рядок, у якому ми шукаємо підрядок;</li>
            <li>
              substring — підрядок, який ми хочемо знайти у вихідному рядку.
            </li>
          </ul>
        </div>
        <div class="blockTopic">
          <h4>Методи startsWith() і endsWith()</h4>
          <p>
            Методи startsWith() і endsWith() призначені для перевірки початку й
            закінчення рядка відповідно. Вони повертають булеве значення true
            або false, залежно від того, чи відповідає початок або кінець рядка
            заданому значенню.
          </p>
          <h4>Метод startsWith()</h4>
          <p>
            Метод <code>startsWith()</code> перевіряє, чи починається рядок із
            зазначеного підрядка.
          </p>
          <code>str.startsWith(substr) </code>
          <p>substr — це рядок, з якого має починатися вихідний рядок.</p>
          <code>
            const str = "Hello, world!";<br />
            console.log(str.startsWith("Hello")); // true <br />
            console.log(str.startsWith("hello")); // false (метод чутливий до
            регістру)
          </code>
          <h4>Метод endsWith()</h4>
          <p>
            Метод <code>endsWith()</code> перевіряє, чи закінчується рядок
            вказаним підрядком.
          </p>
          <code>str.endsWith(substr) </code>
          <p>
            Він також приймає аргументом підрядок, присутність якого потрібно
            перевірити.
          </p>
          <code>
            const str = "Hello, world!";
            <br />console.log(str.endsWith("world!")); // true <br />
            console.log(str.endsWith("World!")); // false (метод чутливий до
            регістру)
          </code>
          <mark
            >Обидва методи чутливі до регістру символів. Це означає, що під час
            порівняння підрядка з вихідним рядком регістр символів має
            збігатися. Якщо в ці методи не передати аргумент, то він повертає
            false.</mark
          >
        </div>
        <div class="blockTopic">
          <h4>Метод indexOf()</h4>
          <p>
            Метод <code> indexOf() </code> використовується для пошуку першого
            входження підрядка в рядок. Він повертає: індекс першого входження
            (індекс першого символу) підрядка, якщо він знайдений або -1, якщо
            підрядок не виявлено
          </p>
          <code>str.indexOf(substr)</code>
          <ul>
            <li>str — вихідний рядок, у якому потрібно виконати пошук;</li>
            <li>substr — рядок, який потрібно знайти у вихідному рядку.</li>
          </ul>
          <code>
            const message = "Welcome to Bahamas!";<br />
            const index = message.indexOf("to");<br />
            console.log(index); // 8
          </code>
        </div>
        <div class="blockTopic">
          <h4>Метод trim()</h4>
          <p>
            Метод trim() використовується для видалення початкових і кінцевих
            пробілів із рядка. <br />Це дозволяє "очистити" рядок від зайвих
            пробілів, наприклад під час обробки введення тексту користувачем в
            елементи форми, видаливши зайві пробіли, які могли бути додані
            випадково.
          </p>
          <code>str.trim() </code>
          <p>Example</p>
          <code
            >const input = " JavaScript is awesome! "; <br />const trimmedInput
            = input.trim(); <br />console.log(trimmedInput); // "JavaScript is
            awesome!" console.log(input); // " JavaScript is awesome! "</code
          >
          <p>
            У цьому прикладі метод trim() видаляє пробіли на початку та
            наприкінці рядка, залишаючи тільки текст "JavaScript is awesome!".
          </p>
          <mark>
            Метод trim() не змінює вихідний рядок, а повертає новий рядок без
            початкових і кінцевих пробілів.
          </mark>
        </div>
        <h2>Методи масиву</h2>
        <p>
          У масивів є вбудовані методи, які дозволяють виконувати зручні
          операції для роботи з елементами масиву. Методи масиву дозволяють
          додавати, видаляти, змінювати та виконувати інші операції над
          елементами масиву.
        </p>
        <div class="blockTopic">
          <h3>Метод join()</h3>
          <p>
            Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в
            рядок. У результуючому рядку елементи будуть розділені символом або
            групою символів, зазначених у delimiter. <br />

            Приклади використання методу join():
          </p>
          <code>
            const words = ["JavaScript", "is", "amazing"];<br />
            console.log(words.join("")); // 'JavaScriptisamazing' <br />
            console.log(words.join(" ")); // 'JavaScript is amazing' <br />
            console.log(words.join("-")); // 'JavaScript-is-amazing'
          </code>
          <p>
            Результат роботи методу можна зберегти у змінну для подальшого
            використання. <br />
            Метод join() корисний за необхідності перетворення масиву в рядок з
            певними роздільниками між елементами. Наприклад, нам потрібно
            написати функцію, яка перетворює рядки зі snake_case (зміїної
            нотації з підкресленнями) в kebab-case (нотацію з тире).
          </p>
          <code>
            function transformString(string) { <br />const words =
            string.split("_"); <br />
            return words.join("-");<br />
            } <br />transformString("user_age"); // "user-age" <br />
            transformString("price_per_droid"); // "price-per-droid"
          </code>
        </div>
        <div class="blockTopic">
          <h3>Метод split()</h3>
          <p>
            Метод рядків split(delimiter) виконує зворотну операцію порівняно з
            методом масивів join(delimiter). Він дозволяє перетворити рядок на
            масив, розбивши його за вказаним роздільником delimiter.
          </p>
          <p>
            Якщо роздільник є порожнім рядком (рядком, у якому нема символів),
            то вийде масив окремих символів рядка. Роздільником може бути один
            або кілька символів. Результат роботи методу можна зберегти у змінну
            для подальшого використання.
          </p>
          <code>
            const name = "Mango"; <br />const letters = name.split("");<br />
            console.log(letters); // ["M", "a", "n", "g", "o"] const message =
            "JavaScript essentials"; <br />const words = message.split(" ");
            console.log(words); // ["JavaScript", "essentials"] <br />
            const slug = "amazing-french-recipes"; <br />const slugParts =
            slug.split("-"); <br />console.log(slugParts); // ["amazing",
            "french", "recipes"]
          </code>
        </div>
        <div class="blockTopic">
          <h3>Метод slice()</h3>
          <p>
            Метод масиву slice(begin, end) повертає новий масив, що містить
            копію частини вихідного масиву, не змінюючи його. Копія створюється
            від індексу begin до, але не включаючи індекс end.
          </p>
          <img
            src="https://s3.eu-north-1.amazonaws.com/lms.goit.files/b21ed4ba-dc3b-4927-be29-7797c141aee1Frame%2048599.jpg"
            alt=""
          />
          <code>
            const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
            <br />
            console.log(planets.slice(0, 2)); // ['Earth', 'Mars'] <br />
            console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus',
            'Jupiter'] <br />
            console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
          </code>
        </div>
        <div class="blockTopic">
          <h3>Метод concat()</h3>
          <p>
            Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання
            двох або більше масивів.
          </p>
          <code>
            const firstArray = ["Mercury", "Venus"];<br />
            const secondArray = ["Mars", "Jupiter"];<br />
            const result = firstArray.concat(secondArray);<br />
            console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
          </code>
          <p>
            Зверни увагу, що вихідні масиви firstArray і secondArray залишаються
            незмінними після виклику concat(). Метод concat() створює і повертає
            новий масив, що містить усі елементи об'єднаних масивів.
          </p>
          <p>
            Порядок аргументів методу визначає порядок розташування елементів у
            новому масиві.
          </p>
        </div>
        <div class="blockTopic">
          <h3>Метод indexOf()</h3>
          <p>
            Метод масиву indexOf(elem) використовується для визначення індексу
            першого входження елемента elem у масиві. Він повертає індекс
            елемента, якщо він знайдений, або -1, якщо елемент не знайдений.
            Метод indexOf() виконує сувору рівність (===) при порівнянні
            елементів.
          </p>
          <code>array.indexOf(elem)</code>
          <ul>
            <li>array — масив, у якому здійснюється пошук.</li>
            <li>elem — елемент, індекс якого потрібно знайти в масиві.</li>
          </ul>
          <code
            >const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];<br />
            console.log(clients.indexOf("Poly")); // 2 <br />
            console.log(clients.indexOf("Monkong")); // -1
          </code>
        </div>
        <div class="blockTopic">
          <h3>Метод push()</h3>
          <p>
            Метод масиву push() використовується для додавання одного або більше
            елементів у кінець масиву.
          </p>
          <img
            src="https://s3.eu-north-1.amazonaws.com/lms.goit.files/3c2a2dbb-316f-4c0a-b29d-0800005b50ddFrame%2048601.jpg"
            alt=""
          />
          <code> array.push(element1, element2, ..., elementN);</code>
          <ul>
            <li>
              array — це вихідний масив, до якого потрібно додати елементи;
            </li>
            <li>
              element1, element2, ..., elementN — елементи, які необхідно додати
              в кінець масиву.
            </li>
          </ul>
          <code
            >const planets = ["Earth", "Mars", "Venus"];<br />
            planets.push("Jupiter");<br />
            console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']
            <br />
            planets.push("Saturn", "Neptune"); <br />
            console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter',
            "Saturn", "Neptune"]
          </code>
        </div>
        <h2>DOM.Події</h2>
        <div class="blockTopic">
          <h2>Підсумкова пам'ятка</h2>
          <p>
            Згадаємо та підсумуємо основні методи і властивості DOM-елементів, з
            якими ми будемо працювати далі:
          </p>

          <h3>Пошук DOM-елементів</h3>
          <ul>
            <li>
              <span class="spanName">element.querySelector(selector)</span> -
              повертає перший елемент, який відповідає вказаному CSS селектору
              всередині елемента element.
            </li>
            <li>
              <span class="spanName">element.querySelectorAll(selector)</span> -
              повертає всі елементи, які відповідають вказаному CSS селектору
              всередині елемента element.
            </li>
          </ul>

          <h3>Властивості DOM-елемента</h3>
          <ul>
            <li>
              <span class="spanName">element.textContent</span> - містить
              текстовий вміст елемента element, ігноруючи всі теги HTML
              всередині.
            </li>
            <li>
              <span class="spanName">element.innerHTML</span> - містить
              HTML-вміст елемента element.
            </li>
            <li>
              <span class="spanName">element.style</span> - об'єкт, що містить
              вбудовані стилі елемента element, які можна змінювати динамічно з
              JavaScript.
            </li>
          </ul>

          <h3>CSS класи на DOM-елементах</h3>
          <ul>
            <li>
              <span class="spanName"
                >element.classList.contains(className)</span
              >
              - перевіряє, чи міститься вказаний клас className на елементі
              element.
            </li>
            <li>
              <span class="spanName">element.classList.add(className)</span> -
              додає клас className до списку класів елемента element.
            </li>
            <li>
              <span class="spanName">element.classList.remove(className)</span>
              - видаляє клас className зі списку класів елемента element.
            </li>
            <li>
              <span class="spanName">element.classList.toggle(className)</span>
              - додає клас className, якщо його немає, або видаляє, якщо він вже
              присутній, на елементі element.
            </li>
            <li>
              <span class="spanName"
                >element.classList.replace(oldClassName, newClassName)</span
              >
              - замінює клас oldClassName на newClassName в списку класів
              елемента element.
            </li>
          </ul>

          <h3>Створення та видалення DOM-елементів</h3>
          <ul>
            <li>
              <span class="spanName">document.createElement(tagName)</span> -
              створює новий HTML-елемент з вказаним ім'ям тегу tagName.
            </li>
            <li>
              <span class="spanName">element.append(el)</span> - додає вміст
              (або елемент) до кінця списку дочірніх елементів element.
            </li>
            <li>
              <span class="spanName">element.prepend(el)</span> - додає вміст
              (або елемент) до початку списку дочірніх елементів element.
            </li>
            <li>
              <span class="spanName">element.remove()</span> - видаляє
              DOM-елемент з DOM дерева.
            </li>
            <li>
              <span class="spanName">insertAdjacentHTML(position, string)</span>
              - додає вказаний рядок HTML після, перед, всередині або перед
              вказаним елементом.
            </li>
          </ul>

          <h3>Події</h3>
          <ul>
            <li>
              <span class="spanName"
                >element.addEventListener(event, handler)</span
              >
              - додає обробник події handler для події event на елемент element.
            </li>
            <li>
              <span class="spanName"
                >element.removeEventListener(event, handler)</span
              >
              - видаляє обробник події handler для події event на елементі
              element.
            </li>
            <li>
              <span class="spanName">keydown</span> - подія, яка виникає, коли
              клавіша на клавіатурі натиснута.
            </li>
            <li>
              <span class="spanName">submit</span> - подія, яка виникає при
              відправці форми.
            </li>
            <li>
              <span class="spanName">change</span> - подія, яка виникає при
              зміні значення елемента форми.
            </li>
            <li>
              <span class="spanName">input</span> - подія, яка виникає при
              введенні даних в текстове поле.
            </li>
            <li>
              <span class="spanName">focus</span> - подія, яка виникає, коли
              елемент отримує фокус.
            </li>
            <li>
              <span class="spanName">blur</span> - подія, яка виникає, коли
              елемент втрачає фокус.
            </li>
          </ul>
        </div>
      </div>
      <button id="scrollTopBtn" class="scrollToTop">↑</button>
    </div>`;
