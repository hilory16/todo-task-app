import * as S from './Home.styles'

import { useTheme } from '~/hooks/useTheme'

export function Home() {
  const { state, dispatch } = useTheme()

  return (
    <S.Page>
      <S.Container>
        Hello
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nesciunt sit, similique obcaecati
          corporis dignissimos magnam, cumque consectetur excepturi ipsum quasi. Vero quae quo perferendis reprehenderit
          repellendus nam, unde suscipit?
        </p>
        <p>
          Laborum, modi tempora! Vero ducimus temporibus assumenda voluptatem deleniti veniam excepturi reiciendis? Quis
          alias qui nam, temporibus illum accusantium officiis perspiciatis possimus quas quaerat esse velit ipsa
          voluptatum ducimus laboriosam?
        </p>
        <p>
          Recusandae saepe exercitationem, debitis iste in hic enim autem atque assumenda expedita! Est explicabo, earum
          ea rerum nostrum mollitia ipsam natus? Delectus consequatur ut iusto neque itaque quidem unde architecto?
        </p>
      </S.Container>

      <button
        onClick={() => {
          dispatch({
            type: 'UPDATE_MODE',
            payload: 'light',
          })
        }}
      >
        Okay
      </button>
    </S.Page>
  )
}
