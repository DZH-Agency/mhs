<template>
  <div>
    <portal-target name="app" />
    <top-nav-bar/>
    <div class="table-wrapper">
      <div class="container">
        <div class="table">
          <div class="table-top">
            <h1 class="table-top__heading">Ranking <span class="text-purple-gradient">Table</span></h1>
            <p class="table-top__subtext">Use the below table to find the ranking of Mad Hares.</p>
          </div>
          <div class="table-search">
            <input v-model="search" type="text" placeholder="Search" class="table-search__input">
            <button class="table-search__button"/>
          </div>
          <div class="table-sort">
            <div class="table-sort__item" :class="{active: sort === 'rarity'}" @click="sort = 'rarity'">Sort By Rarity</div>
            <div class="table-sort__item" :class="{active: sort === 'id'}" @click="sort = 'id'">Sort By ID</div>
          </div>
          <div class="table-nfts">
            <div class="table-nfts-card" v-for="item in items" :key="item.assetId">
              <a :href="getNftLink(item)" target="_blank" class="table-nfts-card-img">
                <img :src="item.cover_url" alt="" class="table-nfts-card-img__img">
              </a>
              <a target="_blank" :href="getNftLink(item)" class="table-nfts-card__name">
                {{ item.name }}
              </a>
              <div class="table-nfts-card__score">
                Score: {{ Number(item.Score) }}
              </div>
              <div class="table-nfts-card__rank">
                Rank: <strong>{{ Number(item.rank) }}</strong> / 10000
              </div>
            </div>
          </div>
          <div class="table-paginator">
            <button :disabled="currentPageNumber === 1" @click="currentPageNumber--" class="table-paginator__arrow prev">
              <img alt="arrow" src="/RankingTable/left-arrow.svg"/>
            </button>
            <button
              class="table-paginator__page"
              v-for="page in availablePages"
              :key="page.number"
              :class="{active: currentPageNumber === page.number}"
              @click="currentPageNumber = page.number || 1"
            >
              {{ page.number || '...' }}
            </button>
            <button :disabled="currentPageNumber === pages.length" @click="currentPageNumber++" class="table-paginator__arrow next">
              <img alt="arrow" src="/RankingTable/left-arrow.svg"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import { debounce, fill } from 'lodash'

export default {
  name: 'test',
  data() {
    return {
      totalPagesCount: 32,
      startPagesCount: 2,
      endPagesCount: 1,
      middlePagesOffset: 1,
      currentPageNumber: 1,
      items: [],
      sort: 'rarity',
      search: '',
    }
  },
  computed: {
    pages() {
      return Array.from(Array(this.totalPagesCount)).map((_, index) => index + 1)
    },
    availablePages() {
      const startPages = this.pages.slice(0, this.startPagesCount)
      const endPages = this.pages.slice(-this.endPagesCount).filter(pageNumber => !startPages.includes(pageNumber))
      
      const middlePages = this._getMiddlePages(startPages, endPages)
      
      const rawPages = [...startPages, ...middlePages, ...endPages]
      
      return this._processPages(rawPages)
    }
  },
  watch: {
    async search() {
      await this.debouncedSearch()
    },
    currentPageNumber() {
      this.loadItems()
    },
    sort() {
      this.loadItems()
    },
  },
  async mounted() {
    await this.loadItems()
  },
  methods: {
    debouncedSearch: debounce(async function() {
      await this.loadItems()
    }, 300),
    getNftLink(item) {
      return `https://crypto.com/nft/collection/41a371f626f43473ca087f0f36f06299?asset=${item.assetId}&edition=${item.defaultEditionId}&detail-page=MARKETPLACE`
    },
    async loadItems() {
      const { data } = await this.$axios.get('/search/', {
        params: {
          page: this.currentPageNumber,
          sort_by: this.sort,
          sort: this.sort === 'rarity' ? 'DESC' : 'ASC',
          collection: 'hare',
          query: this.search
        }
      })

      this.totalPagesCount = data.pagination.pages
      this.items = data.results
    },
    _getMiddlePages(startPages, endPages) {
      const middlePagesRawTemplate = fill(Array(this.middlePagesOffset * 2 + 1), null)
      const middlePagesTemplate = middlePagesRawTemplate.map((pageNumber, index) => {
        return this.currentPageNumber - this.middlePagesOffset + index
      })
    
      const middlePages = middlePagesTemplate.filter(pageNumber => pageNumber > 0 && pageNumber < this.totalPagesCount)
    
      const uniqueMiddlePages = middlePages.filter(pageNumber => !startPages.includes(pageNumber) && !endPages.includes(pageNumber))
    
      if (uniqueMiddlePages.length === 0) {
        return endPages.length ? ['...'] : []
      }
    
      if (uniqueMiddlePages[0] !== startPages[startPages.length - 1] + 1) {
        uniqueMiddlePages.splice(0, 0, '...')
      }
    
      if (uniqueMiddlePages[uniqueMiddlePages.length - 1] !== endPages[0] - 1) {
        uniqueMiddlePages.push('...')
      }
    
      return uniqueMiddlePages
    },
    _processPages(pages) {
      return pages.map(pageItem => {
        const pageData = {
          number: null,
          isDummy: true
        }
      
        if (typeof pageItem === 'number') {
          pageData.number = pageItem
          pageData.isDummy = false
        }
      
        return pageData
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/RankingTable.scss";
</style>
