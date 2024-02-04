import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://pic.imgdb.cn/item/659958df871b83018aeb2405.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>简介</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航二', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航三', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0 lruuo1iqpoj-editor_css' },
        title: {
          className: 'banner2-title',
          children: (
            <span>
              <span>
                <p>CLZ Server</p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner2-content',
          children: (
            <span>
              <p>一个高效的生电服务器</p>
            </span>
          ),
        },
        button: {
          className: 'banner2-button lrz67ww2lnm-editor_css',
          children: 'Learn More',
          target: '_blank',
          href:
            'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=C3Ip6Cb6hWTohQBbFTm3B_I2bLVUg3yP&authKey=%2BMrJVtesBXGmG6hw8SrrCg9CyvtOrPL7g3wivK889eUaiqJxl0WeSU%2FMPbC2C22w&noverify=0&group_code=718768104',
        },
      },
    ],
  },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3 lrz3hery1do-editor_css' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <span>
            <span>
              <p>CLZ Server &amp; KPGEY</p>
              <p>
                <br />
              </p>
            </span>
          </span>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '一个注重技术与友谊的公益服务器',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '探索极致用户体验与最佳工程实践探索',
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: '立即报名',
        href:
          'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=C3Ip6Cb6hWTohQBbFTm3B_I2bLVUg3yP&authKey=%2BMrJVtesBXGmG6hw8SrrCg9CyvtOrPL7g3wivK889eUaiqJxl0WeSU%2FMPbC2C22w&noverify=0&group_code=718768104',
        target: '_blank',
      },
      {
        name: 'time',
        className: 'banner3-time',
        children: (
          <span>
            <p>2024.1.24</p>
          </span>
        ),
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>服务器历史</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: { className: 'block-content', children: '' },
          name: {
            className: 'block-name',
            children: (
              <span>
                <span>
                  <p>池鲤、芝</p>
                </span>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>2022 1月12日</p>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>
                                CLZ服务器的起源源于BQB服务器，某一天，@池鲤
                                加入了BQB服务器，然后这个服务器经历了一大系列变革。首先由于@FY_首尔2号
                                发起的炸掉十二门事件，让整个服务器由盛转衰，后来由于服主@沙扬丽拉
                                的残暴统治，越来越多玩家造反，于是池鲤忍不了BQB的压迫就带走了一大批人并且创立了CLZ服务器
                              </p>
                              <p>
                                &nbsp;
                                &nbsp;在初成立时，服务器用的是云服方案，某幻欢没法加插件,导致一直没堆村,然后寄拉.后来芝购买了搭载i5-12600KF的机器，随着越来越多玩家的加入，服务器变得越来越好，同时两大服务器在互相竞争中互相进步（当然也有互相入侵)
                              </p>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <span>
                  <p>
                    CLZ<span>服务器创始人</span>
                  </p>
                </span>
              </span>
            ),
          },
          img: {
            className: 'block-img lrz68fdj4h-editor_css',
            children: 'https://pic.imgdb.cn/item/659958df871b83018aeb2347.png',
          },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        服务器的规模越来越大，随后产生了腐败的现象，导致进度十分的离谱。后来腐竹玩着玩着觉得这样没意思了，于是就重新开了第2个档。随后是第3个。
                      </p>
                      <p>
                        {' '}
                        某一天，腐竹的电脑进水了，并且他也没时间玩。于是管理员就玩嗨了，整个服务器乌烟瘴气，于是服主一气之下跑路，CLZ关停
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>池鲤跑路</p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>2023 4月</p>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <p>CLZ停服</p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <span>
                  <p>CLZ Server goes down</p>
                </span>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://pic.imgdb.cn/item/65b7bd5e871b83018a017a4e.jpg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content',
            children: (
              <span>
                <span>
                  <p>
                    在池鲤跑路之后，芝带领大部分人开办了NSW服务器，这个服也被称为北CLZ，腐竹为了一改之前腐败的作气，于是直接不开作弊。没有作弊的情况下，进度虽然是慢了，但是很好地整治了之前的乱象，于是NSW开始修缮各大工程。几个月之后，BQB，已经坚持不下去了，于是遗憾关服，而几个月之后，NSW服务器，的主板炸了一个电容，于是也停服了好几个月
                  </p>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>芝</p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>2023 8月5日</p>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <p>NSW服务器与BQB停服</p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <span>
                  <p>NSW Server set up</p>
                </span>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://pic.imgdb.cn/item/65b7bbe9871b83018afa2f9f.jpg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content',
            children: (
              <span>
                <span>
                  <p>
                    某一天，池鲤在b站艾特了芝，于是芝随便回复了一下。这个时候池鲤突然想起了什么东西，直接跑了回来，干废了NSW，转头创办了南CLZ服务器，并且严格整治了管理层，腐败的现象戛然而止，并且靠着强大的知识储备带领成员高质量飞速发展
                  </p>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <span>
                  <p>池鲤</p>
                </span>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>2024 1月24日</p>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <p>南CLZ</p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>essh clz</p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://pic.imgdb.cn/item/65b3dc62871b83018a0233e5.png',
          },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: {
    className: 'home-page-wrapper teams1-wrapper lrz4pw235g6-editor_css',
  },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>管理人员</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://pic.imgdb.cn/item/65b3dfb5871b83018a109c08.jpg',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>池鲤</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <p>CLZ服主</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <span>
                    <p>咕咕咕咕咕</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://pic.imgdb.cn/item/65b3e01f871b83018a125347.jpg',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>hedgehog</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        CLZ服务器官网<span>运维</span>
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          KPGEY工作室副主管，为CLZ服务器官网运行提供技术支持
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://pic.imgdb.cn/item/65b3e0a1871b83018a146c2a.jpg',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>芝</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <p>CLZ物理服主</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        精通村民交易所,各类生电机器,组装了CLZ服务器,与民同乐,关心民生疾苦,是一个好服主
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Teams30DataSource = {
  wrapper: { className: 'home-page-wrapper teams3-wrapper' },
  page: { className: 'home-page teams3' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  blockTop: {
    className: 'block-top-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://pic.imgdb.cn/item/65b3e503871b83018a267547.png',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: (
                <span>
                  <p>不屑</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: (
                <span>
                  <p>生存实用电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children: (
                <span>
                  <p>把不屑挂上去丢人</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://pic.imgdb.cn/item/65b7c1e0871b83018a179812.jpg',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: (
                <span>
                  <p>傻呵呵的小白</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: (
                <span>
                  <p>储存电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children: (
                <span>
                  <p>人家缝的全物品</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://pic.imgdb.cn/item/65b3e664871b83018a2bd118.jpg',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: (
                <span>
                  <p>zczsy</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: (
                <span>
                  <p>生存实用电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children: (
                <span>
                  <p>打炮大师</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b3e7f7871b83018a31ca5b.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>林荫缄默</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>储存电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>储电之神</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b7c26d871b83018a1a2fbe.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>乘风</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>生存实用电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>原神害了你</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b7c22c871b83018a190051.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>奈茶泡芙</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>生存实用电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>明天的事明天再做，今天的事能拖就拖~</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b3e77f871b83018a3001d1.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>毅</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>生存实用电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>就是离远了盔甲架不显示才这样的,傻子</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b3e37e871b83018a1fd580.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>泷吟</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>后勤部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>一个一个一个奴电之神</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b3e6ee871b83018a2dcd2b.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>泳泳</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>后勤部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>全物品大部分材料他备货的</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b3e728871b83018a2eb1fe.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>黑白</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>后勤部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>兄弟们，我又他妈火了,</p>
                  <p>没啥事，我继续打手冲去了</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b7c6cf871b83018a2f152e.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>香肠狗</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>生存实用电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>憋 -我ら龙玉涛と共に憋笑なり-</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children: 'https://pic.imgdb.cn/item/65b7c65e871b83018a2d06ec.jpg',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams3-title',
              children: (
                <span>
                  <p>hevkk</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams3-job',
              children: (
                <span>
                  <p>生存实用电路部</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: (
                <span>
                  <p>搞刷石机的</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>刨坑,打工,掏粪效率翻四倍</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>开了就是没开</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>一站式成为PVP大佬</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>h还是PVP大佬</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>免费下载CLZ公开存档</p>
            </span>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <p>真的可以下载</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <p>
              存档仅供学习参考使用，在服务器使用，请标明原作者，如有侵权行为，会发生什么自行脑补
            </p>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: (
            <span>
              <p>网盘下载</p>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>CLZ Server 配置</p>
            </span>
          </span>
        ),
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <span>
                <p>CPU: 12th Intel Core i5-12600KF 3.70GHz</p>
                <p>RAM: 16GB DDR4 3600MHz</p>
                <p>SSD: iGame-128GB</p>
                <p>HDD: 512GB</p>
              </span>
            </span>
          </span>
        ),
        className: 'pricing0-content',
      },
      { name: 'pricing', children: '¥2,200', className: 'pricing0-pricing' },
      {
        name: 'button',
        children: {
          icon: 'shopping-cart',
          href: 'https://pic.imgdb.cn/item/65b3e121871b83018a168cbe.jpg',
          type: 'primary',
          children: (
            <span>
              <span>
                <span>
                  <p>买不到的别看了</p>
                </span>
              </span>
            </span>
          ),
          target: '_blank',
        },
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper lrux5r95vu-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>加入我们吧</p>
          </span>
        ),
        className: 'title-h1 lrux67z4ksb-editor_css',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>
              无论你是红石大佬，还是后勤大佬，还是pvp大佬，还是建筑大佬，还是生存专家，还是pvp大佬，都欢迎加入我们，还是pvp大佬！
            </p>
          </span>
        ),
        className: 'title-content lrux639tcul-editor_css',
      },
      {
        name: 'content2',
        children: (
          <span>
            <span>
              <p>114514</p>
            </span>
          </span>
        ),
        className: 'title-content lrux709nxwp-editor_css',
      },
    ],
  },
  button: {
    className: 'lrux63xp0he-editor_css',
    children: {
      a: {
        className: 'button',
        href:
          'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=C3Ip6Cb6hWTohQBbFTm3B_I2bLVUg3yP&authKey=%2BMrJVtesBXGmG6hw8SrrCg9CyvtOrPL7g3wivK889eUaiqJxl0WeSU%2FMPbC2C22w&noverify=0&group_code=718768104',
        children: '立即报名',
        target: '_blank',
      },
    },
  },
};
export const Banner40DataSource = {
  wrapper: { className: 'home-page-wrapper banner4' },
  page: { className: 'home-page banner4-page' },
  childWrapper: {
    className: 'banner4-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>magicgbs0z doing</p>
          </span>
        ),
        className: 'banner4-title',
      },
      {
        name: 'content',
        className: 'banner4-content',
        children: (
          <span>
            <p>这个地狱交通真好看</p>
          </span>
        ),
      },
      {
        name: 'button',
        children: {
          href: 'https://pic.imgdb.cn/item/65b3eced871b83018a4303ed.jpg',
          type: 'primary',
          children: '开始使用',
        },
      },
    ],
  },
  image: {
    className: 'banner4-image lruwo1hno7-editor_css',
    children: 'https://pic.imgdb.cn/item/65b3eb16871b83018a3d1b48.jpg',
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'https://pic.imgdb.cn/item/659958df871b83018aeb2405.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>CLZ Minecraft Server</p>
                            <p>
                              KPGEY工作室<br />
                            </p>
                            <p>Wings of Art工作室</p>
                            <p>
                              <br />
                            </p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            {
              name: 'link1',
              href: 'https://zh.minecraft.wiki/',
              children: (
                <span>
                  <p>生电文档</p>
                </span>
              ),
              target: '_blank',
            },
            {
              name: 'link2',
              href:
                'https://wiki.biligame.com/mc/%E7%BA%A2%E7%9F%B3%E7%94%B5%E8%B7%AF',
              children: (
                <span>
                  <p>生电入门</p>
                </span>
              ),
            },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            {
              href: 'https://b23.tv/PfTvl0G',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <p>Bilibili</p>
                  </span>
                </span>
              ),
              target: '_blank',
            },
            {
              href: 'http://kpgeystudio.site',
              name: 'link1',
              children: (
                <span>
                  <p>KPGEY工作室</p>
                </span>
              ),
              target: '_blank',
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <p>CLZ存档</p>
                  </span>
                </span>
              ),
            },
            {
              href: 'https://mcapks.net/',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>Minecraft下载</p>
                  </span>
                </span>
              ),
              target: '_blank',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>
            <span>
              Copyright © 2022-2024 Wings of Art Studio. All Rights Reserved.
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
