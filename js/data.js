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
    loadNews(8);
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
    for (const news of allNews) {
        console.log(news);
        const element = document.createElement('div')
        element.innerHTML = `
        <div
        class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg w-full" src="${news.image_url}" alt="">
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${news.title}</h5>
            </a>
            <p class="mb-3 h-1/2 truncate font-normal text-gray-700 dark:text-gray-400">${news.details}</p>
            <div class="flex items-center my-5">
            <img class="rounded-full w-12" src="${news.author.img}" alt="">
            <h5 class="mb-2 ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${news.author.name}</h5>
            <h5 class="mb-2 ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Views ${news.total_view}</h5>
            </div>
            
            <a href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="btnclick()">
                Read more
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>
            `;
        categories.appendChild(element)
    }

}
function btnclick() {
    console.log("clicked")
}








