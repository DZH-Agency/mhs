<template>
  <div class="mutants">

    <div class="wrapper hero-wrapper">
      <img
        alt="cloud"
        src="/img/mutants/green-cloud-hero.png"
        class="hero__green-cloud"
      />
      <div class="container">
        <header class="hero">
          <section class="hero-img desktop-only">
            <img
              src="/img/mutants/flask-mutants.png"
              alt="flask"
              class="hero__img"
            >
          </section>

          <section class="hero-info">
            <h1 class="hero-info__title">
              Welcome to Mad Era 2033, <span class="text-purple-gradient">where each mutant stores exciting in-game rewards!</span>
            </h1>
            <div class="hero-info-img-mobile mobile-only">
              <img
                src="/img/mutants/flask-mutants.png"
                alt="flask"
                class="hero-info-img-mobile__img"
              >
            </div>

            <p class="hero-info-description">
              Each Mad Mutant features a Rewards Tier NFT metadata that determines the reward package you are eligible for & which can be claimed shortly before our game launch.
            </p>
          </section>
        </header>
      </div>
    </div>

    <div class="wrapper surprise-wrapper" v-if="false">
      <img
        src="/img/mutants/green-cloud-surprise-top.png"
        alt="cloud"
        class="surprise__top-cloud"
      >
      <img
        class="surprise__skull-cloud"
        src="/img/mutants/surprise-cloud-skull-poison.png"
        alt="cloud"
      >
      <img
        class="surprise__rarity-cloud"
        src="/img/mutants/green-cloud-rarity-table.png"
        alt="cloud"
      >
      <div class="container">
        <section class="surprise desktop-only">
          <div class="surprise-left">
            <h2 class="surprise-heading">
              Surprise
              <span class="text-purple-gradient">Announcement</span>
              <small class="surprise-heading__subtext">(involves rewards)</small>
            </h2>

            <div class="surprise-skull-poison">
              <img
                class="surprise-skull-poison__main-image"
                src="/img/mutants/skull-poison.png"
                alt="skull poison"
              >
              <img
                class="surprise-skull-poison__mutant-badge"
                src="/img/mutants/mad-mutant-badge.png"
                alt="monster badge"
              >
            </div>

            <div class="surprise-point">
              <p class="surprise-point__text">
                After each Mad Hare has gone through the mutation process, the specific Mad Mutant will acquire the same
                Mutant Score as the predecessor. Via Upgrade Packs you are now able to increase that score.
              </p>
            </div>

            <div class="surprise-point">
              <p class="surprise-point__text">
                The final score of your Mutant MH is locked after the “upgrade” period is over, which is scheduled to
                happen 24 hours after the CDC drop ends or when the team closes the Mutation Site & notifies the
                community.
              </p>
            </div>

            <div class="surprise-point">
              <div class="small-point"></div>
              <p class="surprise-point__big-text">
                After the “upgrade” period is over, we will send NFTs to Crypto.com to airdrop within 7 days and expect
                CDC to airdrop them within 1 month.
              </p>
            </div>

            <div class="surprise-point">
              <p class="surprise-point__text">
                Based on Mutant Score points, the created Mad Mutants will be positioned among 5 tiers. Each tier
                corresponding to certain types of rewards.
              </p>
            </div>
          </div>

          <div class="surprise__separator" />

          <div class="surprise-right">
            <div class="surprise-point">
              <div class="big-point"></div>
              <p class="surprise-point__text">
                Few hours before we make the Mutation Site available, we'll launch a first-of-its-kind "Upgrade Packs"
                drop on Crypto.com/NFT that lasts for 3 days. The Upgrade NFTs are not required to mutate your Mad Hare,
                but they will enhance your mutation experience and Overall Mutant Score (Mad Hare Mutant Score + points from applied Upgrade Packs = Mutant Score). The pricing of Upgrade Packs ranges
                from $5 to $130, depending on it's attributes.
              </p>
            </div>
            <div class="surprise-point">
              <div class="small-point"></div>
              <p class="surprise-point__text">
                The Upgrade Packs, if applied on your Mad Mutant, will unlock a special trait(s) that you can use to
                enhance your Mad Mutant by switching out corresponding default traits and gain additional Mutant Score
                points to your Mad Mutant.
              </p>
            </div>
            <div class="surprise-point">
              <div class="small-point"></div>
              <p class="surprise-point__text">
                You can also decide to apply your Upgrade Pack without swapping traits and just enjoy the Mutant Score
                boost. (you'll see your rankings and current tier you belong to in real time via a
                leaderboard)
              </p>
            </div>

            <div class="surprise-point">
              <div class="big-point"></div>
              <p class="surprise-point__big-text">
                Each Upgrade Pack can be used ONCE, but you can use several Upgrade Packs on one Mad Mutant. Do not buy
                Upgrade Packs on secondary marketplace, because most NFTs there are USED!
              </p>
            </div>

            <h2 class="surprise-heading small">
              Why is Mutant Score so
              <span class="text-purple-gradient">
                important this time?
              </span>
            </h2>

            <div class="surprise-rating">
              <div class="surprise-rating-box">
                <h3 class="surprise-rating-heading">
                  Mutant Score tiers for mutants:

                  <img
                    src="/img/mutants/rarity-table-stars.svg"
                    alt="stars"
                    class="surprise-rating-heading__stars"
                  >

                  <img
                    src="/img/mutants/rarity-table-smoke.svg"
                    alt="smoke"
                    class="surprise-rating-heading__smoke"
                  >
                </h3>

                <div class="surprise-rating-table">
                  <img
                    class="surprise-rating-table__thing-image"
                    src="/img/mutants/rarity-table-thing.svg"
                    alt="thing"
                  >

                  <div class="surprise-rating-table-row surprise-rating-table-head">
                    <div class="surprise-rating-table-column"></div>
                    <div class="surprise-rating-table-column">%</div>
                    <div class="surprise-rating-table-column">Numerical</div>
                  </div>
                  <div class="surprise-rating-table-body">
                    <div class="surprise-rating-table-row">
                      <div class="surprise-rating-table-column">Mythical Rank</div>
                      <div class="surprise-rating-table-column">0.10</div>
                      <div class="surprise-rating-table-column">1 - 10</div>
                    </div>
                    <div class="surprise-rating-table-row">
                      <div class="surprise-rating-table-column">Legendary Rank</div>
                      <div class="surprise-rating-table-column">4.90</div>
                      <div class="surprise-rating-table-column">11 - 500</div>
                    </div>
                    <div class="surprise-rating-table-row">
                      <div class="surprise-rating-table-column">Epic Rank</div>
                      <div class="surprise-rating-table-column">20.00</div>
                      <div class="surprise-rating-table-column">501 - 2500</div>
                    </div>
                    <div class="surprise-rating-table-row">
                      <div class="surprise-rating-table-column">Rare Rank</div>
                      <div class="surprise-rating-table-column">25.00</div>
                      <div class="surprise-rating-table-column">2501 - 5000</div>
                    </div>
                    <div class="surprise-rating-table-row">
                      <div class="surprise-rating-table-column">Common Rank</div>
                      <div class="surprise-rating-table-column">50.00</div>
                      <div class="surprise-rating-table-column">5001 - 10000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="surprise-mobile mobile-only">
          <h2 class="surprise-heading">
            Surprise
            <span class="text-purple-gradient">Announcement</span>
            <small class="surprise-heading__subtext">(involves rewards)</small>
          </h2>
          <div class="surprise-point">
            <div class="big-point"></div>
            <p class="surprise-point__text">
              Few hours before we make the Mutation Site available, we'll launch a first-of-its-kind "Upgrade Packs"
              drop on Crypto.com/NFT that lasts for 3 days. The Upgrade NFTs are not required to mutate your Mad Hare,
              but they will enhance your mutation experience and Overall Mutant Score (Mad Hare Mutant Score + points from applied Upgrade Packs = Mutant Score). The pricing of Upgrade Packs ranges
              from $5 to $130, depending on it's attributes.
            </p>
          </div>

          <div class="surprise-skull-poison">
            <img
              class="surprise-skull-poison__main-image"
              src="/img/mutants/skull-poison.png"
              alt="skull poison"
            >
            <img
              class="surprise-skull-poison__mutant-badge"
              src="/img/mutants/mad-mutant-badge.png"
              alt="monster badge"
            >
          </div>

          <div class="surprise-point">
            <div class="small-point"></div>
            <p class="surprise-point__text">
              The Upgrade Packs, if applied on your Mad Mutant, will unlock a special trait(s) that you can use to
              enhance your Mad Mutant by switching out corresponding default traits and gain additional Mutant Score
              points to your Mad Mutant.
            </p>
          </div>
          <div class="surprise-point">
            <div class="small-point"></div>
            <p class="surprise-point__text">
              You can also decide to apply your Upgrade Pack without swapping traits and just enjoy the Mutant Score
              boost. (you'll see your rankings and current tier you belong to in real time via a
              leaderboard)
            </p>
          </div>

          <div class="surprise-point">
            <p class="surprise-point__big-text">
              Each Upgrade Pack can be used ONCE, but you can use several Upgrade Packs on one Mad Mutant. Do not buy
              Upgrade Packs on secondary marketplace, because most NFTs there are USED!
            </p>
          </div>

          <h2 class="surprise-heading">
            Why is Mutant Score so
            <span class="text-purple-gradient">
                important this time?
              </span>
          </h2>

          <div class="surprise-point">
            <div class="big-point"></div>
            <p class="surprise-point__text">
              After each Mad Hare has gone through the mutation process, the specific Mad Mutant will acquire the same
              Mutant Score as the predecessor. Via Upgrade Packs you are now able to increase that score.
            </p>
          </div>

          <div class="surprise-point">
            <div class="small-point"></div>
            <p class="surprise-point__text">
              The final score of your Mutant MH is locked after the “upgrade” period is over, which is scheduled to
              happen 24 hours after the CDC drop ends or when the team closes the Mutation Site & notifies the
              community.
            </p>
          </div>

          <div class="surprise-point">
            <p class="surprise-point__big-text">
              After the “upgrade” period is over, we will send NFTs to Crypto.com to airdrop within 7 days and expect
              CDC to airdrop them within 1 month.
            </p>
          </div>

          <div class="surprise-point">
            <p class="surprise-point__text">
              Based on Mutant Score points, the created Mad Mutants will be positioned among 5 tiers. Each tier
              corresponding to certain types of rewards.
            </p>
          </div>
        </section>
        <section class="surprise-rating mobile-only">
          <h3 class="surprise-rating-heading">
            Mutant Score tiers for mutants:

            <img
              src="/img/mutants/rarity-table-stars.svg"
              alt="stars"
              class="surprise-rating-heading__stars"
            >

            <img
              src="/img/mutants/rarity-table-smoke.svg"
              alt="smoke"
              class="surprise-rating-heading__smoke"
            >
          </h3>

          <div class="surprise-rating-table">
            <img
              class="surprise-rating-table__thing-image"
              src="/img/mutants/rarity-table-thing.svg"
              alt="thing"
            >

            <div class="surprise-rating-table-row surprise-rating-table-head">
              <div class="surprise-rating-table-column"></div>
              <div class="surprise-rating-table-column">%</div>
              <div class="surprise-rating-table-column">Numerical</div>
            </div>
            <div class="surprise-rating-table-body">
              <div class="surprise-rating-table-row">
                <div class="surprise-rating-table-column">Mythical Rank</div>
                <div class="surprise-rating-table-column">0.10</div>
                <div class="surprise-rating-table-column">1 - 10</div>
              </div>
              <div class="surprise-rating-table-row">
                <div class="surprise-rating-table-column">Legendary Rank</div>
                <div class="surprise-rating-table-column">4.90</div>
                <div class="surprise-rating-table-column">11 - 500</div>
              </div>
              <div class="surprise-rating-table-row">
                <div class="surprise-rating-table-column">Epic Rank</div>
                <div class="surprise-rating-table-column">20.00</div>
                <div class="surprise-rating-table-column">501 - 2500</div>
              </div>
              <div class="surprise-rating-table-row">
                <div class="surprise-rating-table-column">Rare Rank</div>
                <div class="surprise-rating-table-column">25.00</div>
                <div class="surprise-rating-table-column">2501 - 5000</div>
              </div>
              <div class="surprise-rating-table-row">
                <div class="surprise-rating-table-column">Common Rank</div>
                <div class="surprise-rating-table-column">50.00</div>
                <div class="surprise-rating-table-column">5001 - 10000</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="wrapper rewards-wrapper">
      <img
        class="rewards__light"
        src="/img/mutants/rank-list.png"
        alt="light"
      >
      <div class="container">
        <div class="rewards">
          <div class="rewards-rd desktop-only">
            <div class="rewards-left">
              <div class="rewards-point">
                <div class="big-point"></div>
                <h4 class="rewards-point__heading">
                  <span class="text-purple-gradient">Common Rank</span> will receive:
                </h4>
                <div class="rewards-point-list">
                  <div class="rewards-point-list__item">
                    WL for all Future Mutant NFTs
                  </div>
                  <div class="rewards-point-list__item">
                    1 Mystery Boxes
                  </div>
                  <div class="rewards-point-list__item">
                    1 Rare SFT
                  </div>
                </div>
              </div>
              <div class="rewards-point">
                <div class="small-point"></div>
                <h4 class="rewards-point__heading">
                  <span class="text-purple-gradient">Rare Rank</span> will receive:
                </h4>
                <div class="rewards-point-list">
                  <div class="rewards-point-list__item">
                    WL for all Future Mutant NFTs
                  </div>
                  <div class="rewards-point-list__item">
                    2 Mystery Boxes
                  </div>
                  <div class="rewards-point-list__item">
                    2 Rare SFT
                  </div>
                  <div class="rewards-point-list__item">
                    1 Bundle of Crystals
                  </div>
                </div>
              </div>
              <div class="rewards-point">
                <div class="small-point"></div>
                <h4 class="rewards-point__heading">
                  <span class="text-purple-gradient">Epic Rank</span> will receive:
                </h4>
                <div class="rewards-point-list">
                  <div class="rewards-point-list__item">
                    WL for all Future Mutant NFTs
                  </div>
                  <div class="rewards-point-list__item">
                    5 Mystery Boxes
                  </div>
                  <div class="rewards-point-list__item">
                    3 Rare SFT + 1 Secret SFT
                  </div>
                  <div class="rewards-point-list__item">
                    2 Bundles of Crystals
                  </div>
                  <div class="rewards-point-list__item">
                    1 MH Cosmetic NFT Air-drop
                  </div>
                </div>
              </div>
              <div class="rewards-point">
                <div class="big-point"></div>
                <h4 class="rewards-point__heading">
                  <span class="text-purple-gradient">Legendary Rank</span> will receive:
                </h4>
                <div class="rewards-point-list">
                  <div class="rewards-point-list__item">
                    WL for all Future Mutant NFTs <small>[ Discounted Rate ]</small>
                  </div>
                  <div class="rewards-point-list__item">
                    10 Mystery Boxes
                  </div>
                  <div class="rewards-point-list__item">
                    5 Rare SFT + 3 Secret SFT
                  </div>
                  <div class="rewards-point-list__item">
                    5 Bundles of Crystals
                  </div>
                  <div class="rewards-point-list__item">
                    5 MH Cosmetic NFT Air-drop
                  </div>
                </div>
              </div>
              <div class="rewards-point">
                <h4 class="rewards-point__heading">
                  <span class="text-purple-gradient">Mythical Rank</span> will receive:
                </h4>
                <div class="rewards-point-list">
                  <div class="rewards-point-list__item">
                    Name in the Credits of game under
                  </div>
                  <div class="rewards-point-list__item">
                    "Mutant Squad"
                  </div>
                  <div class="rewards-point-list__item">
                    1 Physical Mutant Statue collectible raffled
                  </div>
                  <div class="rewards-point-list__item">
                    WL for all Future Mutant NFTs <small>[ Discounted Rate ]</small>
                  </div>
                  <div class="rewards-point-list__item">
                    30 Mystery Boxes
                  </div>
                  <div class="rewards-point-list__item">
                    10 Rare SFT + 5 Secret SFT
                  </div>
                  <div class="rewards-point-list__item">
                    10 Bundles of Crystals
                  </div>
                  <div class="rewards-point-list__item">
                    10 MH Cosmetic NFT Air-drop
                  </div>
                </div>
              </div>
            </div>
            <div class="rewards__separator"></div>
            <div class="rewards-right">
              <h2 class="rewards__heading">
                Reward packages based on
                <span class="text-purple-gradient">reward tiers</span>
              </h2>
            </div>
          </div>
          <div class="rewards-rd-mobile mobile-only">
            <h2 class="rewards__heading">
              Rewards
              <span class="text-purple-gradient">For Placement</span>
            </h2>
            <div class="rewards-point">
              <div class="big-point"></div>
              <h4 class="rewards-point__heading">
                <span class="text-purple-gradient">Common Rank</span> will receive:
              </h4>
              <div class="rewards-point-list">
                <div class="rewards-point-list__item">
                  WL for all Future Mutant NFTs
                </div>
                <div class="rewards-point-list__item">
                  1 Mystery Boxes
                </div>
                <div class="rewards-point-list__item">
                  1 Rare SFT
                </div>
              </div>
            </div>
            <div class="rewards-point">
              <div class="small-point"></div>
              <h4 class="rewards-point__heading">
                <span class="text-purple-gradient">Rare Rank</span> will receive:
              </h4>
              <div class="rewards-point-list">
                <div class="rewards-point-list__item">
                  WL for all Future Mutant NFTs
                </div>
                <div class="rewards-point-list__item">
                  2 Mystery Boxes
                </div>
                <div class="rewards-point-list__item">
                  2 Rare SFT
                </div>
                <div class="rewards-point-list__item">
                  1 Bundle of Crystals
                </div>
              </div>
            </div>
            <div class="rewards-point">
              <div class="small-point"></div>
              <h4 class="rewards-point__heading">
                <span class="text-purple-gradient">Epic Rank</span> will receive:
              </h4>
              <div class="rewards-point-list">
                <div class="rewards-point-list__item">
                  WL for all Future Mutant NFTs
                </div>
                <div class="rewards-point-list__item">
                  5 Mystery Boxes
                </div>
                <div class="rewards-point-list__item">
                  3 Rare SFT + 1 Secret SFT
                </div>
                <div class="rewards-point-list__item">
                  2 Bundles of Crystals
                </div>
                <div class="rewards-point-list__item">
                  1 MH Cosmetic NFT Air-drop
                </div>
              </div>
            </div>
            <div class="rewards-point">
              <div class="big-point"></div>
              <h4 class="rewards-point__heading">
                <span class="text-purple-gradient">Legendary Rank</span> will receive:
              </h4>
              <div class="rewards-point-list">
                <div class="rewards-point-list__item">
                  WL for all Future Mutant NFTs <small>[ Discounted Rate ]</small>
                </div>
                <div class="rewards-point-list__item">
                  10 Mystery Boxes
                </div>
                <div class="rewards-point-list__item">
                  5 Rare SFT + 3 Secret SFT
                </div>
                <div class="rewards-point-list__item">
                  5 Bundles of Crystals
                </div>
                <div class="rewards-point-list__item">
                  5 MH Cosmetic NFT Air-drop
                </div>
              </div>
            </div>
            <div class="rewards-point">
              <h4 class="rewards-point__heading">
                <span class="text-purple-gradient">Mythical Rank</span> will receive:
              </h4>
              <div class="rewards-point-list">
                <div class="rewards-point-list__item">
                  Name in the Credits of game under
                </div>
                <div class="rewards-point-list__item">
                  "Mutant Squad"
                </div>
                <div class="rewards-point-list__item">
                  1 Physical Mutant Statue collectible raffled
                </div>
                <div class="rewards-point-list__item">
                  WL for all Future Mutant NFTs <small>[ Discounted Rate ]</small>
                </div>
                <div class="rewards-point-list__item">
                  30 Mystery Boxes
                </div>
                <div class="rewards-point-list__item">
                  10 Rare SFT + 5 Secret SFT
                </div>
                <div class="rewards-point-list__item">
                  10 Bundles of Crystals
                </div>
                <div class="rewards-point-list__item">
                  10 MH Cosmetic NFT Air-drop
                </div>
              </div>
            </div>
          </div>
          <p class="rewards__note">
            <strong>IMPORTANT!</strong> Mystery boxes, SFTs, Crystals and MH Cosmetic NFTs will be airdropped once
            Quantum Frenzy game is live in Q2. Physical Mutant Statue collectible will be raffled within 1 month after
            the Mutation process has concluded. To receive your items, there will be a separate migration event before
            the game goes live, where you'll be able to insert your Metamask Polygon address to a designated page on our
            game website. Everybody will be notified several times in advance.
          </p>
        </div>
      </div>
    </div>
    
    <div class="wrapper rd-wrapper">
      <div class="container">
        <section class="rd">
          <h2 class="rd__title">In-depth reward descriptions</h2>
          <section class="rd-info">
            <h3 class="rd-info__title">Mutant Mad Hare Rewards & Descriptions</h3>
            <p class="rd-info__note">Note: All of the following NFT rewards will be tradeable on the secondary NFT marketplace once they are claimed with the corresponding Mad Mutant. The claim period will be indefinite, which means once the designated page is published, you can claim your rewards any time you want thanks to Polygon smart contracts.</p>
            <section class="rd-info-section">
              <h4 class="rd-info-section__title">Cosmetic NFT (exclusive in-game wearable)</h4>
              <p class="rd-info-section__text">
                The "Mutant Metamorphosis" cosmetic item can be exclusively attained from the Mad Era mutation event.
                <br>
                <br>
                Holders who achieve the coveted Mythical rank will be rewarded with 10 "Mutant Metamorphosis" cosmetic items, Legendary rank will receive five & Epic rank mutants will be granted only one.
                <br>
                <br>
                To maintain the rarity and exclusivity of the "Mutant Metamorphosis" cosmetic item, only a total of 4,550 will ever be produced. This makes it a genuinely limited-edition cosmetic in the PsychoKitties & Mad Hare Society ecosystem.
                <br>
                <br>
                If you’ve ever played Runescape, then you will certainly remember tradeable discontinued items such as Party Hats or Santa Hats. Latter appeared randomly on the ground all over RuneScape on 25 December 2002, when players could pick up as many as they wanted. Over time these ultra-rare cosmetics accrued significant value within the culture of the game.
                <br>
                <br>
                Unlike the Santa Hat, the “Mutant Metamorphosis” cosmetic item will also grant a powerful in-game advantage!
              </p>
            </section>
            <section class="rd-info-section">
              <h4 class="rd-info-section__title">Mystery Box</h4>
              <p class="rd-info-section__text">
                Each Mutant Themed Mystery Box will contain only one of the 12 potential prizes available. The item's rarity determines the likelihood of obtaining it when opening the mystery box.
                <br>
                <br>
                There are 7 cosmetic items available, making the chances of obtaining one of these items relatively high. However, there are only two Rare and one Epic cosmetic items, which are more challenging to obtain due to their rarity. Although these items are hard to attain within the game, they are not limited edition, like the “Mutant Metamorphosis” cosmetic item we discussed earlier.
                <br>
                <br>
                Similarly, four game lobby decorations are available, including one Rare, two Epic, and one Mythical decoration. The probability of obtaining a Mythical decoration is considerably lower than acquiring a Rare decoration.
                <br>
                <br>
                This feature adds an element of excitement and anticipation to each mystery box. It heightens the sense of surprise and satisfaction when obtaining a unique and exclusive item, which is rare and valuable.
                <br>
                <br>
                Icing on the cake will be obtaining highly sought-after vouchers for $QTM (Quantum) Tokens - the on-chain cryptocurrency that powers our ecosystem.
              </p>
            </section>
            <div class="rd-info-table">
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">
                  Mutant Mystery Box
                  Item Name
                </div>
                <div class="rd-info-table-col">
                  Probability
                </div>
                <div class="rd-info-table-col">
                  Total Items
                </div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">QTM Voucher</div>
                <div class="rd-info-table-col">0.50%</div>
                <div class="rd-info-table-col">126</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Cosmetic Item 1</div>
                <div class="rd-info-table-col">15.00%</div>
                <div class="rd-info-table-col">3780</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Cosmetic Item 2</div>
                <div class="rd-info-table-col">15.00%</div>
                <div class="rd-info-table-col">3780</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Cosmetic Item 3</div>
                <div class="rd-info-table-col">15.00%</div>
                <div class="rd-info-table-col">3780</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Cosmetic Item 4</div>
                <div class="rd-info-table-col">15.00%</div>
                <div class="rd-info-table-col">3780</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Cosmetic Item 5</div>
                <div class="rd-info-table-col">8.00%</div>
                <div class="rd-info-table-col">2016</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Cosmetic Item 6</div>
                <div class="rd-info-table-col">8.00%</div>
                <div class="rd-info-table-col">2016</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Cosmetic Item 7</div>
                <div class="rd-info-table-col">5.00%</div>
                <div class="rd-info-table-col">1260</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Lobby Decorations 1</div>
                <div class="rd-info-table-col">8.00%</div>
                <div class="rd-info-table-col">2016</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Lobby Decorations 2</div>
                <div class="rd-info-table-col">5.00%</div>
                <div class="rd-info-table-col">1260</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Lobby Decorations 3</div>
                <div class="rd-info-table-col">5.00%</div>
                <div class="rd-info-table-col">1260</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col">Lobby Decorations 4</div>
                <div class="rd-info-table-col">0.50%</div>
                <div class="rd-info-table-col">126</div>
              </div>
              <div class="rd-info-table-row">
                <div class="rd-info-table-col"></div>
                <div class="rd-info-table-col">100%</div>
                <div class="rd-info-table-col">25200</div>
              </div>
            </div>
            <section class="rd-info-section">
              <h4 class="rd-info-section__title">Rare & Secret SFTs</h4>
              <p class="rd-info-section__text">
                The Mutation event features exclusive consumable SFTs (Semi-Fungible Tokens). There will be five variations of Rare Consumable SFTs and three variations of Secret Consumable SFTs.
                <br>
                <br>
                These SFTs can only be exclusively claimed by Mad Mutant holders and cannot be produced in the game nor purchased from in-game marketplace. However, you will still be able to sell them on the secondary marketplace to other players. By consuming these SFTs before or during a run, players will receive unique and exclusive properties that give them a distinct game advantage. Once used, they are burned forever.
                <br>
                <br>
                These SFTs hold exclusive properties that offer a unique effect that surpasses those that can be crafted or purchased within the game. This gives players a rare and special advantage that cannot be obtained elsewhere.
              </p>
            </section>
            <section class="rd-info-section">
              <h4 class="rd-info-section__title">Crystal Bundle Vouchers</h4>
              <p class="rd-info-section__text">
                The Crystal Bundle Vouchers offer a large quantity of Crystals at a discounted price compared to individual purchases in the in-game store. These Crystal Vouchers can be sold to other players on the secondary marketplace. However, once the voucher is redeemed for Crystals, the Crystals can only be used for in-game purchases.
              </p>
            </section>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  targetDate: null,
  data() {
    return {
      timerDate: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
    }
  },
  mounted() {
    this.$options.targetDate = new Date(Date.UTC(2023, 2, 15, 18))

    setInterval(() => {
      const total = Date.parse(this.$options.targetDate) - Date.parse(new Date());

      if (total <= 0 ) {
        this.timerDate = {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        }
        return
      }

      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((total / 1000 / 60) % 60);
      const secs = Math.floor((total / 1000) % 60);

      this.timerDate = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(mins).padStart(2, '0'),
        seconds: String(secs).padStart(2, '0')
      }
    }, 1000)


  }
}
</script>

<style
  scoped
  lang="scss"
>
@import "@/assets/scss/pages/mutants/mutants.scss";
</style>
