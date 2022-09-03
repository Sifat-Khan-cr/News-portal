fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))

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
    document.getElementById('spinner').classList.remove("hidden")
    fetch(`https://openapi.programming-hero.com/api/news/category/0${daata}`)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

function displayNews(AllNews) {

    const allNews = AllNews.sort((b, a) => {
        return a.total_view - b.total_view
    })

    const totalNews = document.getElementById('total-news')
    totalNews.innerHTML = `
    <h5 class="m-5 truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${allNews.length > 0 ? `${allNews.length} News in this category` : "No News Found"}</h5>
    `
    const categories = document.getElementById('news-container')
    categories.innerHTML = ``
    for (const news of allNews) {
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
            <h5 class="mb-2 ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${news.author.name === null ? "not found" : news.author.name}</h5>
            <h5 class="mb-2 ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white"><i class="fa-regular fa-eye"></i> ${news.total_view === null ? "not found" : news.total_view}</h5>
            </div>
            
            <label for="my-modal" class="btn modal-button">See more</label>


            <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
            <h3 class="font-bold text-lg">Catagory-Id : ${news.category_id}</h3>
            <h3 class="font-bold text-lg">Id : ${news._id}</h3>
            <h3 class="font-bold text-lg">Author : ${news.author.name}</h3>
            <h3 class="font-bold text-lg">View : ${news.total_view}</h3>
                <h3 class="font-bold text-lg">Rating : ${news.rating.number}</h3>
                <h3 class="font-bold text-lg">Badge : ${news.rating.badge}</h3>
                <h3 class="font-bold text-lg">Trending : ${news.others_info.is_trending}</h3>
                <h3 class="font-bold text-lg">Today Pick : ${news.others_info.is_todays_pick}</h3>
                
                <div class="modal-action">
                    <label for="my-modal" class="btn">Close</label>
                </div>
            </div>
        </div>

        </div>
    </div>
            `;
        categories.appendChild(element)
        document.getElementById('spinner').classList.add("hidden")


    }

}
function btnclick() {
    console.log("clicked")
}








