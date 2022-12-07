<template>
  <div ref="panel" class="team">
    <a name="about"></a>
    <div class="team-container">
      <div class="team_head">
        <div ref="topic" class="team_head-sub">WHO WE ARE</div>
        <div ref="topicDesc" class="team_head-title">TEAM</div>
      </div>
      <div class="team_body">
        <div class="team_list">
          <div :class="itemClass(0)" @click="clickItem(0)">
            <div class="team_item-head">
              <div class="team_item-avatar">
                <img src="@/assets/images/default-avatar.png" alt="" />
              </div>
              <div class="team_item-info">
                <div class="team_item-name">Loki</div>
                <div class="item_item-label">Founder</div>
              </div>
            </div>
            <div class="team_item-body">
              <ul>
                <li>
                  Have rich experience of GamefI production and distribution
                  from 0 to 1
                </li>
                <li>
                  once made and launched a card-based blockchain game in just
                  one week
                </li>
                <li>
                  served as consultant in the production plan of FPS games and
                  Metaverse games for the European NFT project "ALPACADABRAZ"
                </li>
                <li>
                  2019 "Huxiang Cup" Network Security Skills Competition
                  Champion
                </li>
                <li>
                  4-years experience in network security red-blue confrontation
                  and code auditing
                </li>
                <li>
                  Used to be responsible for application security, security
                  operations and other related work in a large factory
                </li>
                <li>
                  Once in charge of network security penetration and audit of
                  Winter Olympics-related projects
                </li>
              </ul>
            </div>
          </div>
          <div :class="itemClass(1)" @click="clickItem(1)">
            <div class="team_item-head">
              <div class="team_item-avatar">
                <img src="@/assets/images/default-avatar.png" alt="" />
              </div>
              <div class="team_item-info">
                <div class="team_item-name">Loki</div>
                <div class="item_item-label">Founder</div>
              </div>
            </div>
            <div class="team_item-body">
              <ul>
                <li>
                  Have rich experience of GamefI production and distribution
                  from 0 to 1
                </li>
                <li>
                  once made and launched a card-based blockchain game in just
                  one week
                </li>
                <li>
                  served as consultant in the production plan of FPS games and
                  Metaverse games for the European NFT project "ALPACADABRAZ"
                </li>
                <li>
                  2019 "Huxiang Cup" Network Security Skills Competition
                  Champion
                </li>
                <li>
                  4-years experience in network security red-blue confrontation
                  and code auditing
                </li>
                <li>
                  Used to be responsible for application security, security
                  operations and other related work in a large factory
                </li>
                <li>
                  Once in charge of network security penetration and audit of
                  Winter Olympics-related projects
                </li>
              </ul>
            </div>
          </div>
          <div :class="itemClass(2)" @click="clickItem(2)">
            <div class="team_item-head">
              <div class="team_item-avatar">
                <img src="@/assets/images/default-avatar.png" alt="" />
              </div>
              <div class="team_item-info">
                <div class="team_item-name">Loki</div>
                <div class="item_item-label">Founder</div>
              </div>
            </div>
            <div class="team_item-body">
              <ul>
                <li>
                  Have rich experience of GamefI production and distribution
                  from 0 to 1
                </li>
                <li>
                  once made and launched a card-based blockchain game in just
                  one week
                </li>
                <li>
                  served as consultant in the production plan of FPS games and
                  Metaverse games for the European NFT project "ALPACADABRAZ"
                </li>
                <li>
                  2019 "Huxiang Cup" Network Security Skills Competition
                  Champion
                </li>
                <li>
                  4-years experience in network security red-blue confrontation
                  and code auditing
                </li>
                <li>
                  Used to be responsible for application security, security
                  operations and other related work in a large factory
                </li>
                <li>
                  Once in charge of network security penetration and audit of
                  Winter Olympics-related projects
                </li>
              </ul>
            </div>
          </div>
          <div :class="itemClass(3)" @click="clickItem(3)">
            <div class="team_item-head">
              <div class="team_item-avatar">
                <img src="@/assets/images/default-avatar.png" alt="" />
              </div>
              <div class="team_item-info">
                <div class="team_item-name">Loki</div>
                <div class="item_item-label">Founder</div>
              </div>
            </div>
            <div class="team_item-body">
              <ul>
                <li>
                  Have rich experience of GamefI production and distribution
                  from 0 to 1
                </li>
                <li>
                  once made and launched a card-based blockchain game in just
                  one week
                </li>
                <li>
                  served as consultant in the production plan of FPS games and
                  Metaverse games for the European NFT project "ALPACADABRAZ"
                </li>
                <li>
                  2019 "Huxiang Cup" Network Security Skills Competition
                  Champion
                </li>
                <li>
                  4-years experience in network security red-blue confrontation
                  and code auditing
                </li>
                <li>
                  Used to be responsible for application security, security
                  operations and other related work in a large factory
                </li>
                <li>
                  Once in charge of network security penetration and audit of
                  Winter Olympics-related projects
                </li>
              </ul>
            </div>
          </div>
          <div :class="itemClass(4)" @click="clickItem(4)">
            <div class="team_item-head">
              <div class="team_item-avatar">
                <img src="@/assets/images/default-avatar.png" alt="" />
              </div>
              <div class="team_item-info">
                <div class="team_item-name">Loki</div>
                <div class="item_item-label">Founder</div>
              </div>
            </div>
            <div class="team_item-body">
              <ul>
                <li>
                  Have rich experience of GamefI production and distribution
                  from 0 to 1
                </li>
                <li>
                  once made and launched a card-based blockchain game in just
                  one week
                </li>
                <li>
                  served as consultant in the production plan of FPS games and
                  Metaverse games for the European NFT project "ALPACADABRAZ"
                </li>
                <li>
                  2019 "Huxiang Cup" Network Security Skills Competition
                  Champion
                </li>
                <li>
                  4-years experience in network security red-blue confrontation
                  and code auditing
                </li>
                <li>
                  Used to be responsible for application security, security
                  operations and other related work in a large factory
                </li>
                <li>
                  Once in charge of network security penetration and audit of
                  Winter Olympics-related projects
                </li>
              </ul>
            </div>
          </div>
          <div :class="itemClass(5)" @click="clickItem(5)">
            <div class="team_item-head">
              <div class="team_item-avatar">
                <img src="@/assets/images/default-avatar.png" alt="" />
              </div>
              <div class="team_item-info">
                <div class="team_item-name">Loki</div>
                <div class="item_item-label">Founder</div>
              </div>
            </div>
            <div class="team_item-body">
              <ul>
                <li>
                  Have rich experience of GamefI production and distribution
                  from 0 to 1
                </li>
                <li>
                  once made and launched a card-based blockchain game in just
                  one week
                </li>
                <li>
                  served as consultant in the production plan of FPS games and
                  Metaverse games for the European NFT project "ALPACADABRAZ"
                </li>
                <li>
                  2019 "Huxiang Cup" Network Security Skills Competition
                  Champion
                </li>
                <li>
                  4-years experience in network security red-blue confrontation
                  and code auditing
                </li>
                <li>
                  Used to be responsible for application security, security
                  operations and other related work in a large factory
                </li>
                <li>
                  Once in charge of network security penetration and audit of
                  Winter Olympics-related projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-placeholder" />
  </div>
</template>

<script setup>
const openIndex = ref(0)
const itemClass = computed(() => index => `team_item${index === openIndex.value ? ' active' : ''}`)
const clickItem = index => openIndex.value = index

const panel = ref()
const topic = ref()
const topicDesc = ref()
function textAnimate() {
  $gsap.from(
    [topic.value, topicDesc.value],
    {
      yPercent: 100,
      opacity: 0,
      ease: 'power4.in',
      scale: 0.9,
      scrollTrigger: {
        trigger: panel.value,
        pin: false, // pin the trigger element while active
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=100px', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true,
      },
    })
}

const { $gsap } = useNuxtApp()
const clientWidth = ref(0)
onMounted(() => {
  textAnimate()

  clientWidth.value = window.innerWidth
  let anim
  function initAnimate() {

    const elTeamConatiner = document.querySelector('.team-container')
    const elTeamPlaceholder = document.querySelector('.team-placeholder')
    const elTeamList = document.querySelector('.team_list')

    const offectWidth = elTeamList.clientWidth - window.innerWidth + elTeamList.offsetLeft * 2
    const stickyTop = window.innerHeight - elTeamConatiner.clientHeight

    if (offectWidth < 0) return false

    elTeamPlaceholder.style.height = elTeamConatiner.clientHeight + offectWidth + 'px'
    elTeamConatiner.style.position = 'sticky'
    elTeamConatiner.style.top = stickyTop - 50 + 'px'

    if (anim) {
      return
    }
    anim = $gsap.to('.team_list', {
      x: - offectWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: '.team-placeholder',
        start: 'top center',
        end: 'bottom center',
        pin: false,
        scrub: 1,
        markers: false,
        // base vertical scrolling on how wide the container is so it feels more natural.
      },
    })
  }
  function destroyAnimate() {
    if (anim) {
      anim.progress(0)
      anim.kill()
    }
    anim = null
  }
  if (clientWidth.value > 576) {
    initAnimate()
  }
  window.addEventListener('resize', () => {
    clientWidth.value = window.innerWidth

    if (clientWidth.value > 576) {
      initAnimate()
    } else {
      destroyAnimate()
    }
  })
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
  content: '';
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
  content: '';
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
  /* overflow: hidden; */
  display: flex;
  align-items: flex-start;
}

.team_list {
  flex-shrink: 0;
  display: flex;
  margin: 0 6.25rem;
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

.team_item:first-child {
  border-left: 1px solid var(--white);
}

.team_item-head {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15.375rem;
  text-align: center;
  transition: 0.3s;
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
.item_item-label {
  font-size: 20px;
}

.team_item-body {
  flex-shrink: 0;
  opacity: 0;
  transition: 0.3s;
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
  background-color: rgba(0, 0, 0, 0.1);
}

.team_item-body li {
  margin: 0.75rem 0;
  list-style: square;
}

.team_item.active {
  width: 47.5rem;
  background-color: #b0f41f;
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

@media (max-width: 575.98px) {
  .team {
    padding: 4rem 0;
    padding-top: 0;
  }
  .team_head {
    width: auto;
    height: auto;
    padding: 2.5rem 0;
    margin-bottom: 0;
    border: none;
    text-align: center;
  }
  .team_head::before {
    display: none;
  }
  .team_head-sub {
    padding: 4.75rem 2rem 1.5rem;
    font-size: 0.875rem;
  }
  .team_head-sub::before {
    left: -7rem;
  }
  .team_head-title {
    font-size: 1.875rem;
    line-height: 2.5rem;
    padding: 0 2rem;
    border: none;
  }
  .team_body {
    display: block;
  }
  .team_list {
    margin: 0 1.25rem;
    display: block;
  }
  .team_item {
    flex-direction: column;
    gap: 1.25rem;
    padding: 0;
    margin-bottom: 1.25rem;
    width: auto;
    height: auto;
    border: 1px solid var(--white);
  }
  .team_item-head {
    padding: 1.25rem 1.25rem 0;
    height: auto;
    width: auto;
    flex-direction: row;
    justify-content: flex-start;
  }
  .team_item-avatar {
    width: 7.5rem;
    height: 7.5rem;
    margin-right: 1.25rem;
  }
  .team_item-info {
    text-align: left;
  }
  .team_item-body {
    width: auto;
    height: 0;
    padding: 0 1.25rem 1.25rem;
  }
  .team_item.active {
    width: auto;
  }
  .team_item.active .team_item-head {
    width: auto;
    transform: none;
  }
  .team_item.active .team_item-body {
    height: auto;
  }
}
</style>