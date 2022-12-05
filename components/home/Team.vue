<template>
  <div class="team">
    <div class="team_head">
      <div class="team_head-sub">WHO WE ARE</div>
      <div class="team_head-title">TEAM</div>
    </div>
    <div class="team_body">
      <div class="team_list">
        <div :class="itemClass(0)" @click="clickItem(0)">
          <div class="team_item-head">
            <div class="team_item-avatar"><img src="@/assets/images/default-avatar.png" alt=""></div>
            <div class="team_item-info">
              <div class="team_item-name">Loki</div>
              <div class="item_item-label">Founder</div>
            </div>
          </div>
          <div class="team_item-body">
            <ul>
              <li>Have rich experience of GamefI production and distribution from 0 to 1</li>
              <li>once made and launched a card-based blockchain game in just one week</li>
              <li>served as consultant in the production plan of FPS games and Metaverse games for the European NFT
                project "ALPACADABRAZ"</li>
              <li>2019 "Huxiang Cup" Network Security Skills Competition Champion</li>
              <li>4-years experience in network security red-blue confrontation and code auditing</li>
              <li>Used to be responsible for application security, security operations and other related work in a large
                factory</li>
              <li>Once in charge of network security penetration and audit of Winter Olympics-related projects</li>
            </ul>
          </div>
        </div>
        <div :class="itemClass(1)" @click="clickItem(1)">
          <div class="team_item-head">
            <div class="team_item-avatar"><img src="@/assets/images/default-avatar.png" alt=""></div>
            <div class="team_item-info">
              <div class="team_item-name">Loki</div>
              <div class="item_item-label">Founder</div>
            </div>
          </div>
          <div class="team_item-body">
            <ul>
              <li>Have rich experience of GamefI production and distribution from 0 to 1</li>
              <li>once made and launched a card-based blockchain game in just one week</li>
              <li>served as consultant in the production plan of FPS games and Metaverse games for the European NFT
                project "ALPACADABRAZ"</li>
              <li>2019 "Huxiang Cup" Network Security Skills Competition Champion</li>
              <li>4-years experience in network security red-blue confrontation and code auditing</li>
              <li>Used to be responsible for application security, security operations and other related work in a large
                factory</li>
              <li>Once in charge of network security penetration and audit of Winter Olympics-related projects</li>
            </ul>
          </div>
        </div>
        <div :class="itemClass(2)" @click="clickItem(2)">
          <div class="team_item-head">
            <div class="team_item-avatar"><img src="@/assets/images/default-avatar.png" alt=""></div>
            <div class="team_item-info">
              <div class="team_item-name">Loki</div>
              <div class="item_item-label">Founder</div>
            </div>
          </div>
          <div class="team_item-body">
            <ul>
              <li>Have rich experience of GamefI production and distribution from 0 to 1</li>
              <li>once made and launched a card-based blockchain game in just one week</li>
              <li>served as consultant in the production plan of FPS games and Metaverse games for the European NFT
                project "ALPACADABRAZ"</li>
              <li>2019 "Huxiang Cup" Network Security Skills Competition Champion</li>
              <li>4-years experience in network security red-blue confrontation and code auditing</li>
              <li>Used to be responsible for application security, security operations and other related work in a large
                factory</li>
              <li>Once in charge of network security penetration and audit of Winter Olympics-related projects</li>
            </ul>
          </div>
        </div>
        <div :class="itemClass(3)" @click="clickItem(3)">
          <div class="team_item-head">
            <div class="team_item-avatar"><img src="@/assets/images/default-avatar.png" alt=""></div>
            <div class="team_item-info">
              <div class="team_item-name">Loki</div>
              <div class="item_item-label">Founder</div>
            </div>
          </div>
          <div class="team_item-body">
            <ul>
              <li>Have rich experience of GamefI production and distribution from 0 to 1</li>
              <li>once made and launched a card-based blockchain game in just one week</li>
              <li>served as consultant in the production plan of FPS games and Metaverse games for the European NFT
                project "ALPACADABRAZ"</li>
              <li>2019 "Huxiang Cup" Network Security Skills Competition Champion</li>
              <li>4-years experience in network security red-blue confrontation and code auditing</li>
              <li>Used to be responsible for application security, security operations and other related work in a large
                factory</li>
              <li>Once in charge of network security penetration and audit of Winter Olympics-related projects</li>
            </ul>
          </div>
        </div>
        <div :class="itemClass(4)" @click="clickItem(4)">
          <div class="team_item-head">
            <div class="team_item-avatar"><img src="@/assets/images/default-avatar.png" alt=""></div>
            <div class="team_item-info">
              <div class="team_item-name">Loki</div>
              <div class="item_item-label">Founder</div>
            </div>
          </div>
          <div class="team_item-body">
            <ul>
              <li>Have rich experience of GamefI production and distribution from 0 to 1</li>
              <li>once made and launched a card-based blockchain game in just one week</li>
              <li>served as consultant in the production plan of FPS games and Metaverse games for the European NFT
                project "ALPACADABRAZ"</li>
              <li>2019 "Huxiang Cup" Network Security Skills Competition Champion</li>
              <li>4-years experience in network security red-blue confrontation and code auditing</li>
              <li>Used to be responsible for application security, security operations and other related work in a large
                factory</li>
              <li>Once in charge of network security penetration and audit of Winter Olympics-related projects</li>
            </ul>
          </div>
        </div>
        <div :class="itemClass(5)" @click="clickItem(5)">
          <div class="team_item-head">
            <div class="team_item-avatar"><img src="@/assets/images/default-avatar.png" alt=""></div>
            <div class="team_item-info">
              <div class="team_item-name">Loki</div>
              <div class="item_item-label">Founder</div>
            </div>
          </div>
          <div class="team_item-body">
            <ul>
              <li>Have rich experience of GamefI production and distribution from 0 to 1</li>
              <li>once made and launched a card-based blockchain game in just one week</li>
              <li>served as consultant in the production plan of FPS games and Metaverse games for the European NFT
                project "ALPACADABRAZ"</li>
              <li>2019 "Huxiang Cup" Network Security Skills Competition Champion</li>
              <li>4-years experience in network security red-blue confrontation and code auditing</li>
              <li>Used to be responsible for application security, security operations and other related work in a large
                factory</li>
              <li>Once in charge of network security penetration and audit of Winter Olympics-related projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const openIndex = ref(0)
const itemClass = computed(() => index => `team_item${index === openIndex.value ? ' active' : ''}`)
const clickItem = index => openIndex.value = index

onMounted(() => {

})
</script>

<style scoped>
.team {
  padding: 6.25rem 0;
  background-color: var(--black);
}

.team_head {
  position: relative;
  padding: 5.422rem 0 2.5rem;
  margin-bottom: 2.69rem;
  width: 61.46vw;
  height: 25rem;
  color: var(--white);
  border-right: 1px solid var(--white);
}

.team_head::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 6.25rem;
  border-right: 1px solid var(--white);
}

.team_head-sub {
  position: relative;
  border-top: 1px solid var(--white);
  padding: 8.1875rem 6.25rem 2rem;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.625rem;
  letter-spacing: -2%;
}

.team_head-sub::before {
  content: "";
  width: 14.125rem;
  height: 2.1875rem;
  background: #dafd60;
  position: absolute;
  top: -1.0625rem;
  left: -0.8125rem;
}

.team_head-title {
  border-top: 1px solid var(--white);
  padding: 0 6.25rem;
  font-size: 6.25rem;
  line-height: 5.1845rem;
}

.team_body {
  padding: 0 6.25rem;
}

.team_list {
  border-left: 1px solid var(--white);
  display: flex;
}

.team_item {
  width: 19.375rem;
  flex-shrink: 0;
  border: 1px solid var(--white);
  border-left: none;
  height: 31.25rem;
  padding: 4rem 2rem;
  display: flex;
  gap: 2rem;
  color: var(--white);
  overflow: hidden;
}

.team_item-head {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15.375rem;
  text-align: center;
  transition: .3s;
}

.team_item-avatar {
  width: 8.75rem;
  height: 8.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team_item-avatar img {
  max-width: 100%;
  max-height: 100%;
}

.team_item-name {
  font-size: 30px;
  font-weight: 700;
}

.team_item-body {
  flex-shrink: 0;
  opacity: 0;
  transition: .3s;
  width: 34rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.1875;
}

.team_item-body ul {
  height: 100%;
  padding-left: 1rem;
  overflow-y: auto;
}

.team_item-body ul::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.team_item-body ul::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgba(0, 0, 0, .1);
}

.team_item-body li {
  margin: .75rem 0;
  list-style: square;
}

.team_item.active {
  width: 47.5rem;
  background-color: #B0F41F;
  color: var(--black);
}

.team_item.active .team_item-head {
  width: 8.375rem;
  transform: translateY(-5rem);
  /* justify-content: flex-start; */
}

.team_item.active .team_item-body {
  opacity: 1;
}
</style>