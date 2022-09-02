fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    // .then(data => console.log(data.data.news_category.length))
    .then(data => displayCategory(data.data.news_category))

// fetch('https://openapi.programming-hero.com/api/news/category/01')
//     .then(res => res.json())
//     // .then(data => console.log(data.data.news_category.length))
//     .then(data => console.log(data.data[0]))

// const loadData = async () => {
//     const url = `https://openapi.programming-hero.com/api/news/category/0${daata}`
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);

function displayCategory(vals) {
    for (const val of vals) {
        const categories = document.getElementById('categories')
        const element = document.createElement('div')
        element.innerHTML = `
            <button onclick="loadNews(${val.category_id})">${val.category_name}</button>
        `;
        categories.appendChild(element)
    }
}

function loadNews(daata) {
    fetch(`https://openapi.programming-hero.com/api/news/category/0${daata}`)
        .then(res => res.json())
        // .then(data => console.log(data.data))
        .then(data => displayNews(data.data))
}

function displayNews(allNews) {
    const categories = document.getElementById('news-container')
    categories.innerHTML = ``
    // console.log(allNews);
    for (const news of allNews) {
        console.log(news);
        const element = document.createElement('div')
        element.innerHTML = `
            <div class="w-full">
                <a href="#"
                    class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="${news.thumbnail_url}" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${news.title}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${news.details}</p>
                    </div>
                </a>
            </div>
        `;
        categories.appendChild(element)
    }

}
