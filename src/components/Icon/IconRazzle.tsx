import * as React from 'react';
import cn from 'classnames';

export const IconRazzle = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      baseProfile="tiny-ps"
      viewBox="0 0 210 210">
      <defs>
        <image
          width="130"
          height="165"
          id="razzle_svg__img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAClCAYAAACQqiVzAAAAAXNSR0IB2cksfwAALCVJREFUeJztnQdYVMfaxxfpiEhAUdRo7FFj11ijxoqFsiDYFUURLIkaTXJvchNTNDGJ8bN3wBYRG4oNS7BFU4wtaqyJSTQau1elw/vNnLI7Z86cs2eXLeBlnuf/LCDq2Z3f+c/7vjNnRheZct5t3LaLQfGp50YblEbqjOF1PKdTbO0UdYLTGzL9MHqSTMd57Tk+eviK5NFe5f1G63Q6h6pcpSqjRyYkc9c0ac9RTm+J2ivqsEFT0w/FTN17eOjb6Yf7T9t7qOe0vRnN/r3ncOD0jAwXXUlqE3dd8YlPvZAev+0CxG9H2nYexm3HOsdpfNovMA5pPKezMGEHUtoZ9PVp9DXWKZi48zQSekVfv7HzJPoa62f09c/w5i70uusEev0J3tz9E/c6aTfWD0g/cq9v7joO/d7/DJxdXQFdksPkVKYM1OvUDSakfguT9xyHKXuOwZR0rO/Q10jpR+EtUXuPwtS9R2DqviOF0/YdyUMwZE/bd/TRtH2Hbk3bd/gq0sG39x/6/J0DB3tPOXToxeknTngBgJMdutSyhkEYm/orD4IoDAQBwzgDDGcJnUEQnBFg4MXBYNBJDgROAgwGIDj9KIDwI8Rt2AvVm7V2KARYvlVfhMHzV8Hk3d8jEL4XYBCA2CMAgfQWJwzEEQ6ItzAQnA4LOoQAOVyIHKJg2r6D2dP2H7yKtOXtfRnvTd2f0X3ygQNVpwOUsX3vmtF4EC6mx6X+CnHbfkUg4FfeGXh3EGDYjmHADnFOCsSOMwIUAgzIFXiXOGmQAYidJzgZYfgJwfEjdB47BVw9PB3uBq0HjIA30o5yLsWBsJuHQeIOe74jgDC6A4ZCCsNhQO4g6CCnt/cdykEw3Ht7b8bRt/cf/NdbBw7UKDZDiAGEbRc5EEQZnUF0B5ZD/KLqEDwQojuclLjDm4I7DFuSAr5VXnS4G7xQrQa6lmTDcMXD8IMEhsmcMxwXhotjUnfYe1TBHXggpgow8MpAUBzMeWf/wUvvHDj0yb8zMppNPnbM0/a9rdJ4EC6nj029BAgITjIgRIcgYRCAGE8NGTwMZxgwnJI5xLitx6CFPgacnJwcCoGrpxd0e+PfMDHtuGG4EmHgJQwVu48zhotjUofYKw4ZFBAcDLRDICD2Z+QiXUAOMXNaRkZlO3Q5u0lBuAwiEDwI4qs0diAdAg8VeNgYv93oDON30EDgQJIfNowwnITIL9eCT8XqDh8SXmrdAcZvPUoEtD/yooDg4wbSIVjxw1FD/IBBeEsCAx8/SIeMDBGKPOQOJ97NOBI0OSXF/u6AQYjdeiUdCWK3XiZguARxHBAKDrFd2SHGKQwXBhh2nIRxqT9Cw26RUKaMi0NB8PDxheAP5/DxCzFkiQEthoEPbCl3IIaLyRQMsviBBoIRPxiHjIw/3z6Q8c7kPXv87ND9xoZBGLP1mgACUuoVCQwcENukQ4aqOxiGi1+Uh4u0UxA0bR64e/k6PDZo0LUvjE05xMcuYkC7SxrQcjDs/pEaNr6Xxw/pStkFkW6y4oe9pDtgfYsyjUNLpm5JD7A9AULjHQGDcBV48c5Au4PcIS7IhgxphqEUTJ6BESv3QpUGbR0OgU+lqjBw7jfIoX421D0MQLDcgXMIRuyg4hBvyYCg3YEcKowOMW7Dpsz6XbquQddZF8n29QfOEbZcS0eCMVuuwhgDDGx3GGuAgXCI7cZgUhmIXwxAvDb6fXBxc2y66OLmDu1GvIFimxNC7EKmvD8zMxx5DeQHqTvIMgwBCsOQIU03+aCSzi6wQ2RAz0lvgZuXVy661v1I9ewEwm8IhN+Ag0HiDLzGKgGhMlzQQIgwjEw6CBVqNHa4G1R+uSlEJ+4hglkBhh0nmekuLxYMUiAmSWoPZHXymAGGKVRASRejYhLXQUDtuuK15iNtQnpRZ0tn4EH4PX30lt9hNAeDAAQTCnrIuMgIKOl00whE7MafoUnvUeDs4uZQCJzKOEPXN6ZDfOpJWXbDTndPGoYLmUPs/omIHyiH0JphEAHlpLR90FIfyWUzxDVnI21Bqm0zGCbuus+DsBmBsPk3OQxbeBjGEA5hhMEIhKn6Q/y2cxD68Wpw9SjvWDdwcoIaLV+DmHWHjekuEb9IHeKkfLgQqqNK5XJJMLnneyrLOMYsV08hytUDvpoP3v7+rGsvQEpGqmIzEGK2/JEes/k68DAIksDAu8MYVXcQgslUhjugIWPUuu+hTvtQhw8J3hUDIeyzRGK4IusfdLqrAgTLHQwZhjSgnMQIKKXDBe8Ob6Z9C4169IYyzs5K15+JtMImMHAgbMIg/AExm65DDIIghgNBFOkQV9nDhQQGAohUozv0fncZuJd1bLqI7bZJ8FCI23JasTIqL5WfkgHxxk4qs9hJw/CTxB2MmYU8mORBQK+7j0LEzDnoM/I29T5ykFYiWbfOgEEYtenPdAQDcDBsvg4GdxBgGLOFcIitouRAiO4QR6WbQ1ccgcp1X3V4KbkcShf7z96AHOqcpBAmh0FhdlWSXfxMTKZR2QVRnaTL1ZNl8QMPRMyqzRBQp77W9/IU6XOkclYDYYgAAhKMQjCIIoEwOgTvDqMVh4srVOxwCUZv/AVaD5gKZRwcIDq7uEK76KkQu/k0keqeY2Y2kuFCySEYcyfs+oNCurnHOH/x5s4j8FrMeHNvlMdWhYEH4a/0kRsxCKSkDqE4XGw1BpSkQ4hARMxOA98qdW3SuVqFP+DARq0gevV30lSXkdlIFuLskBfD5EMGmVmcpKqTSLuNUDADSqQRyzdAhZfqWPLesDNMRfKyCgjRGxEIm/6CkRuR0Kschj+MMIhAsDIMwSFIl2jcZwwKfhy78sijXHnoMW0OO5DdRtY+pPMmrMU45NoLfjHOaSqg/JlRkKKCScIhJqQegpbhgznHsvD9/Y0Ui+RqBRBuIke4YQCBh+EvIIcLWfwgc4hrwpBhBKHf9I3g6RPgUAiwarR+HaLX/sgHstQkWhyzEHaeGi7OMuZOyNjhtKz2YABCqTrJAfED9J+12BqLcu4jDUByLjIISBDNwSAAsZGEQQ7EaAkQtDtchaErf4RqTbqivL1MkTuyKPL0rQDBn6yF2C0XFWdV4yWprny4YDsEa7g4TcFAxQ87pdXJMd+kQ+12Xaz1Xs8ivVYkEEZs/BuB8DfwMNwUYOA1apMcCAwDHVCSQMRsvgad4maDi1tZh0Lg7OoGTfVjUMB6XhLExhGzquxpdlaZnD1cMGGgqpOscjV2iF5TPwJ3bx9rvV9ccNqnszR45EG4nT4iBYHA6SaI7hBNAEHHDorBJIodhqw8AZXrt3MoBFgVajWEAYv2GybQjDWPy5I5k7FEzUMyq7rNuEwvnppIG2ci1TS4ww7SHYzBZMya3VD1lebWTqmzkD5G8igCCLeAlxQI0h14hzBmFjGb5QHlqI3XoEXE2+hudOzsIla7ke9BzKaLQgBLF8BYJXJ6uGBNptGLcNQLUhMZJevxqd9D2yFjUUptk0U5V5FaWwZCyj8IhNswYsNtEIGIZjiEEQh5qsnrOgR/ug28ygc6FgJ0lwXUbw6Dl39nCGCN8yVXFeZLlGZV5Uv16HRzvAaHmEikm1Fz1oB3BZsF0XlIs5DMWy6PQRiOQBi+4R/AImGQDxekQ8gDyqGrzkP914ehi3FsBdGjvD/0ej8RucFVIW65JimRy+ZMGEAY4wfT6zZNr+w2QoGX6DXuE6k2n2ANXUAybyEsD8IdBMIdMMKgDsRIAxAkDH9B0IebUc5e0aEQcE8rdY1EQ9RVQ2przGqUptevcDDQQLBgMA4XYuxAwiCfv5hALuRNOwURsxJRJuNn688BxwqTzQNhLQIhmQdhGAEDB0SKujsYhotNN2BwwnmULvZCwY9j00Uvv0rQ95MUw+QZXR6XzqgSUKTSw4V6/EA/FRYvm7uQu8PI1Qegeov23NBl48+hEOk7JH+zQBiafC99WPJdGJaMQbgjvIpACLHDhlvy+EEAYkTyH9Bm+EyHB4g4Am/WfyIMX3dRmEllFcAoh0Aw0OVxg0NslWYX8nSTtW7zPJVdCDHEttPQOf49esGJLfUAqZ0FINwDHoa7MJwTBUPKP4Q7CA6xkZf+6yPgX72pQyHAd1mF2k0gavExRmmcnlGlhoot5HwJawKNHC6kBal4SXWSXsRrjB2GLt8Fleo3sedngusKY3Vaq40cCOvvpyPB0PX3YCgBhMEhNtBQEA6x4SY0DZuGUiF3h4Lg5lUOOo77ipnRkDDEkItviPkStRlVEYrYrZekAaVsyBAns6TPfYzdcgpeHTIeXNw87P25zENy1wzCEAMISMn3ZTCIQMiGCwRC2OxjUNa/yE8r4dW6eE3eDEvlX7vJjKjFP80YveXGjFGbb3CvRv1pUCyn64J+mxGbqqy41KuUrhC6NGPstkszEQyr47dfvIOAKJDHD/wSPbwGoqyfQ4Lo3UgvmAHCg3QkGCLCILrDehKIuzIgBq68DNVbhnGLQYt4wXgJ1iAdP4NmmVq2dI09cQIJ7Ku0E17x2y6GICD2IxDy6HRz1LrjULdzX0c5JZ5/qKUZhMHrH6UP/uYh8DA8QAA84J1hvegOeMgwAsENF+tvQaeJCdaaT8AgRGq64OLYAJxi91wIjNt+aTUCIoeMH3q/vwil1A5boncbqbmm9yCCMASBwMHwzQNgukOy1B0il/4KVRv3ACsVj0o2CEIbt/P3ygiEuWjIyMJZxsi13yPH7GTPTIEWrid013TxPAiPkSM8Al7YGYzi3IGCAoPw6rDZ4OJucqHl/xQIuE1MuVJx7LbLc8ZsOpf1WtyHjggQSeHYa7imCx+yFnwGr8MgPAZePBBDOHcwOoQRiHsQ/PkxKBdg1eVnzw0IuMWknPcLm5W82rtCZfyUkiNBwPMO72i6aB6EJ+mD1v0XeCEY1j0CiUMQQAxIvAEv95wATk5WrZU/VyDgFvBKiyZOTk5ndI4FAYP4qaYLxiAMXPcUgfAERBg4Z1gnOMQ67A6PDPFDz/+kg5ev1Te3eO5A0PH5O14b4GgQZmu6Wg6EtQiEtRgEUQIQ63gghgjuMCDpNrzUZqC13eB5BuEDneNBmKvpankQnqUjGGAAgmEgFgEDHirE4aLtmOXg6m61pVWlIBQ3EAYgEAYgEBAQMJB7fcoBQbpD8OyzUKEm3tzCJjNnpSDYQk5O+b6BL5kBwpqs9AFrMmHAmmfIFbCkMAxY8wiaRn5sy9nFUhBsoLIvBOQHTf7QPBCiOBAyBRCkMPT7+hfwDnjJlhddCoKVhafkm/aJyh+/cbc5IGQjELIhak0WGIDA7oAUvvxvqN4mwhrzCaUg2FHefpVh8Jyk/Cm7j5gJwmoRBF4YhqjVT6HDpPVQxtXmD7CWgmBFObu6Q8fh02Dy7qP5U9O/0w5C5Kqc9EgMAgcDfuVhCFl4HQKb9rLHxZeCYC2hIaHaK20gPmU/fuQ+f0r6ce0g9OdAyAFeAgxIrUYtBGd3r1IQLGsOAcHN0xuCps4UN+QwF4S89P6rcoGEofeX56BclZft9QZKQbCCcIBYq3U3iP1mr7gRBwLhe3NAyEcg5AGGASt8xSOo22uirQPEUhCsLJQuQv/PV3FPWQv7L1gCQj7wMORBl/czwKtCDbu9AV0pCEVWGWcXaBU+Ft7cKdk7On/ybjNAiEgqTI9IKoAIBEP4ymdQo/0Qez+fUApCEVXhpYYwZOEmekNx80EIxyAgvRq/Dlw8ytkTglIQiih807Yf/hZM2P4Dvf8jAuFH8x0h6Mur4Fe7jb0hKAWhSBA4QZUGr8LIpP2S/ZsE5aOhwkxHSMiHJoO+gjKuDllaVQqChfIo5wchHy4nNvWS7N+EQDhhHghBX1wFn2oO2yy7FAQL3eDlLnoYu/GY0h6Q2kHojUAIXfokvdbrcY7c/awUBAvkWb4i6D9dxT1lLdmUw7iHk3kgtBi1LN0BAWIpCEUQvmkb9x4B8VulO8xPlG4Imo+kDQS/Or19ylasmW6rC9aoUhDMVEDtZhCdeEh1D2kkBMJpbSCg5oNUCoL1m81AcHUvC13iZwqn6xHHNct3aMkfn1aCQPDwDcysHzSlFAQtwrOLTTrBiIRDkp3e2HtIYxDOlAwQnJxdoJF+embf+bdKQdAgfNRB0DtLIS71HPO4JMmmXjvOlBAQ8OYW9TpAn/+7kdk/EZ43EPBRfTt1Vvy88HxCw+7DIHbzOfYusWmCthsOUsMgfKX1gh0GgltZP2gduxrCk/Iz+69+rkBwQ3pbx8c+Vvu88C73EV9tU9jLiT52AOssAuHsJ1ov2mEgBDbrC8EL7yIQCp4nEPDp71FId3VW/bycoGXkZO78C+ZOLYx9nFAgmTd++zltzz7qHASCm7c/dJy6B8IT83gQno+hAZ/pHIN0S8fvbGY1CPyqN4IBCw4w94KUbApKnkGRdi4XwTBM68XbHQRcDKnXeyqELXvGzXg+JyBgJ4hGuqGz8ufl6uEN3acsg9gtZmz9h90h7UJW3K6LXbW+AbuDUP7FJtBj5nkRgpIOAt7qtirSuzqrDwfC8rM2wTDym1+km4tvZe0U+yu9sdetcTsvN9P6RuwLglMZaDzgC9CvzOZA4JRYkN0/qeATfWJeD9sqW6ZIw+vTHiELbvYIaNChB7pOc9QfaYeOP1bH6p+XRzl/6P3eGhizmXHCXqr0hD16pzcEw6lJu399qViCUL7aK9Dn6z8MEIRTiiBe1b6mfxau8Of8EjzjMjxxbWbkauliXbyUv8fHx8HTr6rdnNGU8JY7dV+Lguh1FxjnZ11h7BZLbg6Kz+y+uD025UT5YgeCu3cF6DB5O4Qn5MpAYHUs/7NCWecqwSBVIfXzfE5SKHINUEQkPIG6PcejD98mW+dbpBeqvgyR8w4b9oMczdw+WOGEvW2XCuO3XZo5PeW8W7ECAa+IrtF+qAQCJRgsU6EKFAQMMofgQej6wWHw9HXw8QKEnF3coe2IT1DnX5ecnSU5P4sBg+gQaMjIj9t6MQoANJ8lbRcQPP2qQad3DzA7nbz7tQBBDyWsISJcBY7+FBDB829CYLM+Dt9QnFSl+u0hasEx5oGsrO2DpfEDgmHr5Wtjdl6rpxUCu4FQp9ckCF32xKQDFN0ZzPj38KrtxGxoMXKxw48kJOXiXhY6jVsAI1N+5/eT3vQHYwthte2Dr+aPTb2yanoGuBQjEJzAt0Yz6DXrkmIHKd3dWoNFtd9RcwY8VPSe/Rv412nr8M4XxQ2hrYNh2JorxJFJDBgkO83LNhf/Z+y2a63MgcDmILh4+kDzEYtRbJDHDAZNZQpKsYCpGEMpgCS/1qN4pVH4x/Z6vlOTyvpXhb4fpxlO2GMfyCoOF6JDEO6w9VohAmLjxF1XtG3GbS8QAhp2g75zb6qmfkpAmALEfIiIP0/Mh+4fnwRP/xcd3vmk6vcYBkPXXjacrMef0Kt2VPN1erf5h6NTf+tvLgQ2BcHZzRPaTkjh3EApwGPVEbQMIWq/r+X/CV54D2p0GO7wA0pJlfUPhH4zd0J0yg3i/Ky/BCjYh6lJY4frBaO3/r49bsvtgOIDgpMT1Ow8GkKXPDb7zjcn8GO7QaHi/yOqw5Qd4OZt87OVtN80ru7QYuA7MDz5huyEHMmBagoHsgpA3EJfd7AEApuBUK5yfeiGrDcikd05pgpHah2sFl8o/T/kn4csfojSxX6O3CxbdtNUatgOBiVdFo5KEo5LUjidVwGGZzFb/vpgOoB5x/zZEgS8/KxB6H9AvyJL1bK1BnvqsQEbIKX/R5+QAy2il4CLh9U2FC+yXD29oeOEBcT5WbcNxyWNoNwhmnIHAopdozffqGYpBDYBwbtyXej5+a+aLd5UKqkFCrnkxSn8fY+Z58C7Uh2Hd75BeDFqy54QtfyC/Lgk4ZQ9+WGsRoeI3nSjcNSmG5djNv/ZyZwqos1BwHdaq9gkbnZR611tDhim3ETt7+pXZkH9fu/acwMQk/LyC4SeH6TCsPX/yI9bREAMl5zOKz1hD5+/OWrjzd9iNt0MjkwBbYd42QMEXKKt0lIPoUufKJR8laEwDUah2dDQv9v90zNQtmJNh3e+KG4xavB4GMY4UE08iHU4BYPx/M2/EQh/P0GOENdlunkVRJuD4OEbCO0nbTd2fqK54732+EGLU5DfBy96AC+2G1S8ZherN4R+XxwWDkNhwXBH4g7S03lv3Y3edGvaqJV3y1kDAquCUOO1EXy6mKitc0ylg0pQaIFH8n1CLlfPcNAj/2w3QMNTiyEfwaA1t4yn4yRLj0wavuEudRireDrv7afRG2//O9KMKWa7gYAtF6eL4Yn50o5juIIpW7csOFRWnzl/QcWXOzu880XhIbRi/bagX3CeeX7WsPXkYWr0cYt3Hg9PufPZ4HWPtB3jZ0YrMgjObl7cJhv6lTmqd6zWOEHLUKH8/1DpJAKz2dB5jtgOSFHu5fyhy9sbYfC6h4wjk4SzN4UD1YwOwR3E+hi5xIf4YHdrQ4BbkUHwr9cRes/+XVPgZ+p31FxBzTVYhSP8itNYnyoNwEbHC5gvXHHtGAVRCTcNRyWJMh63eJ8aLjh3eDYi+d6n+DA2qxMgtCKBUMbFDVqNTuBm8rTe+YbvE+mOlGcGpl1FeWVSyOJHUKf7hGKVLnr4VIRu7++CQWsfGU7IkZ2wJz9Q7Z+hGx68E5nyl5/Ve59oRQKhcpM+6AN/wLRrJQtnBpOJ8r+nNoRogaXTu99yD9LYsmPNEV78Uj9oHAxYdU96ftY3JAzCCXvrDQ7xeNj6B+Mjoeh1AlPNYhC8KrwEr//nmCRAFDtVCQq1IUBtCFEbNlgghC3PROni4GLkBk7gV6slhC64wh+IslZ6dtYgyh0QDAXIGS4OW//f6Ng08LJBv8uaRSDgfLxu0GRuPsFUJC/780QzswEzMg8xQHx1XDK4ln2hGADACy9+aTVqHnFU0lPh7CzG+VnrHxciGM4M3/DwdWtUDLU2i0DA9fpuH/2sqagjc4dE+d1tKmMwJ4vA+0Xi5XGWdJht5ASVGnWBkHlXuMNQyLOzBmGtIw9Ue/x0cPJ/tw9c/6x5UWYSLWlmg4ADxCaDZ8tmF5U6X9JxicodbM74ryQ8x9Eo4pNiNCTg5zn8ocOkFIhc9VQ4Lsl4ZBJ5mBqC4dHgdU8+iUzJrKor4gSSJc08EPDceaMeELzgrmLn0oGhWueaqgtIvlb7fwT1mnVZSBcdDwAWnk+o2Tka+ic9kZ6QI8LAOcTT3AFrn54a+s2TqN7zzF9raK1mFgju5SpCm3EbjBVDsXMS2Z2jZahgQsH4d+XFIum/EbbsCdTqGsc5ltb3Y2uVq1wXun903PBYneTIpNWZ2VFrs84OWpv1wYDknAb2HgroZhYIVVtFQMii+8xxXl4XMA0F6RpaYg1WfMD/G3ncfguunuUd3vmkGoT8C8JXPpE8Y4lUiAC4OXBdzozhKVB1+nTHAiA2zSC4+wRA538d5FYAmwrcZBF/ovzPtcxOav1/8Erpyk37OLzjDUJDaPkXG0PQFxf4x+rIE3LW5ORErc2dhzICT9t0qWVNEwjYbhuGfwRhKzIVO09t7KcBUBw2VIJJyc8o92k1ZhVyA5scV2yRXL3KQ5v4deg6c+VPYa/JLYxanXN1wJqnTW3UpxY1TSC8ULOV5GklydCgEMQxhw/G3Ry+qiAvIrFwD/p6gTblS77XL322ALnBAl2ZMgvQtappIdL3Oqtua8N2gyotwriYhXsCO8n4SD4GgXsKezWCYU3el8NWQ1lbday5zSQIeDFq0yFzUbqYw+xsSfCWWCALJMMT5RBQcUVmxCoYGpwGXhZp6d9euiotcfXNlPCH3hfpsdr7Larcyr4AHSanURVX/qHbCBKKVblXI1bntrFVx5rbTILgV+tV6Dfvb8W0kLZ60bqVagqM4NKeW+fg97tWZytXKOMML3UaBaFLHzOGNv4p7AjjY/n5/VfnLygRwaJH+crQcdpefvezRGnHMwO/xALloUI5frAnCLhQ0xrpD6X3bLmcwKdqI+g587zhc2AG0AYgsCvk3+y/Nq+bIwpIdFMEAVfnanYZI5liZkbxZMfTwR4FhkLMYO/NtPAdiLemzWO9b0vl7OoBjQd+xWVVsuFRKfhdlV8YvipvW+SKxzadYtbSFEHAR/51fu+wPA5QCBiVhgS18rMDHEFs7ZD+ZL1vS+Vfux0KqK9wsQF/A0iBUCq7o9jhQfiqfIseXLVmY4KA19U1CHnfsBciDQLrTbGCQ01/5hgQvJHm66wUK+DNLVqjFFa/IlsAQAoD6YyMIaMwIqlwe+954LDyMm5yEJycuACxz9d/SvN1hZSRThNZsQMVHDoyWCRbE6TruiJCgIfQqi3DuRVR+JA0gxLzKSiUY6j+SQWPo5IgypGBowwEVy9faDU60RAgmooLyAKPhHhGbKDw9x0FAn4w5FOkLF0RQOCG0H8fkkKQwIYgggGD8HkVRiQWno5cDTXt/ikITQZCYNM+0G/+bbmd0TEBI1NglY9l6aO8eujInVdrIf2qKwIItbtNgNAlT+Qg0FAw4JC56iqY0nIpuNr/Y6BAwG7QniiGSDpYAQRFJ1AIkBh1BUeC4KHjXcGiWKFsxVrQ7aNTEL4yzzQICsOE9HMr/CksCWo74HMwgoDHurp497OlT+R3NcPuWSmi4XfUAkb5947ei/llnQWxgjMKEJsOmgP65Tk8CCIMpqAwwEFkFobPrDALfSYfFPXJZkuaAYTy1RpDj5m/SCuF1NimGCAy8mUlcGQO4ngQcKyAzzXQftAGCqgDGvWAkIUPjBDQ0gwDHUgW/ha+Blrge9OeHwIHgpOzKzTq/ymEEcvPJLGBwe4LZfMJ4cTvkcOBUlFFEickFgsQcAtE+kGncYjAs4uvxq1H6WKuoeP1LBAMryogyN2hAH0mi0JWgtUecNXSOBC4ufMvr7FLxYnyTmVCQDoFOfYpOAHhHMUBBJy2TUbK0ZlMF8tAjY4jIXgBcoMVQqevUHAFUyAoZRlJBX+hz+Q1e34APu4+Aeltxm/gnhqmO1cCAB3cJEl/xlyEwhhSyH+vmMQIYquLdFanCoITlAtsAD0+Pc+5gR4BgBUuvOoVodAYOxhhyEefz0pzd0+1uPn51fFpEPp+On4ghDmeMwBgpoBUMMksLTNcpZiBgD/0WJ2KKzi7ekKzIQtRgJhr7HwBhHACCMP3TJcw4RAiDAn598OS8nra5Z33nn7Fp9+82+kRiew7ltl59F1OvtJFExoiCqhiFCOIrSLSIaQCHQME/7odoNfnVzkQWDCYhoCAwbQ7FIYnFO6NXAiVbf6uh6wFHxQApsvsmooPJHe1ghso1AjYZeniFyOQDR+IJVu8gt2gdew3ELY0ywCCRAQUtEtIhgetzsDriX5l/nCbT1NzICQVpsvuXgUgIojvWcGjUm1BloVIIStuIOAzmo7oqPmEKi0iIHj+fSYEnBsIMIQzHELRKcRAUsUl0I26PzIFbDtNTYLAzBgYHatUE5B1OitbSGQ6RnEDAccK2BUMcxBlK9SELu/9APplOXyHC6/hLGcwOEQuO24Qf8YKJtkwPNEnFLwRGWnD5yBFEGg3oB2CWWlUCP5kdQaVzEFQcQMBN3wH7tUJdYW6PadA6KInPADLco2vJkAQMwsSCL2W+IECIiKh4NqA5dDAZu+WdgRyKJDECEpQkMAQkCiVlFn/TjF0BLHpke6UrVgbun14Uuh8CgRTMFABpZ4Cgg2FvBAVkZBfgD7nz4KX2ugReZYjsABgloeV0kESDJXfKYbpI918XTx9UpsOnAthS1CAuDSHgCFHCoMGIIwBZa5suFB2CQKGlQVXIlZBc5u8U6UYgWXhLMsnMwPaHeigUtFVii8IZep0nRAZMv9xNoYgTARhaRFBUBg2VKFAIKDfz+vy3rHF6Lqsv5LJ4AgKdzkzgGQMF0zLVxlOJP9W8QVBp19wwx91eGrY0uxCDgBBbCio4UIMLFWgUCpKsYaKvnNvQWDzkDvosvrp+NXY1mskCMwZRjp9NDE0GFJMKt1U/HeLtyNwLXxJXicEwm0SBIMUHYKAQM0xGGmnnoDB6A758Gp8MrdeBF1SGpJFh3MoNqYjqA0FChkFK0NQDSzJfzchLzNk/p1iC0LkdHALW5KTiDo8X3QDBIYMiDBZMMkAQwEIug5BxxDB8+5CYNNg8UjCB0hDrPomZTECcRfTANDpIcv+6Q5n/htU4Bj0xZXMmp2jiy0IuIWtyOuGYHgQtiRb5gphLJdQBEJLHEEBsSwLWo5MgDIu7mSlM0PHP8JnncZKHyWdayIeMPW7SkOJGFyGLnmEHxHLdPb0Lt4gJIKvfknOGgRCIYYhjAWAIhAUCCbrD2R6mQvdPjoN3gH16HkPfCj5FB1f/Cp6o0vMkjGdHu+VqomUW6hVJKkhAdpO2IjPeMArg4o1CLjKHL4stzXq/JucK1DOEKYaNzDqDyrDBFmVDF3yDOr3fkdpT6jLSA2t8vaUCkp00Ce7yxXiBZOZBAFHnzl/QqVXeuI3VAJA0Olil4Jr2NLc+QiCXM4VRCCWaBgqlFJOhkuQZevX3/8BcEFLx54Wz0f6AKnou7TTBSX6zqZjByUXUBoqWLGG+HebRy8WN8suESDgFr7sWWvU+ddIEMi4gYZA5hRq8QPpCOj7fnPvQLU2JjcNPYdk1hnQzMYKFulXWUZg6q5XAIb8Gd7EGy+PE95MiQEB78UQviR7YdhiHgBaXOebgIOHIlc6VFAKW5YNr8au13JwOX6QdzZS0Z6FIB1B4gpKDsD4PVY8wXQS4e/gwz3q9HwTnIwHc5cYEPC6gMhFuS1RR/+BYdAzYKBBUIaBHjaMIATN+g0qvvy61qX1fyN10RWlyNQbgaBXyRpkKaDCXc9KGVkVRqxO/zoIHj4B5BspOSCg1mV6hgvqvE/1i1GsgJ1hMRkvUDDg+EF0iqUMl5AFlPjn2dBk0FzuuQmd9ucsEnT8QmTLmqlpaFNBoaITKMQG+Gnh6u2H0odvligQcNMvy66nX5xzhgRB0RmWMNxAxR26f3QWfKo2NgcCrBtI3S1+Q0MER1AaDpRiA5N/zowN8qHdG1tYW+eXOBBwBhG+OGc6gqDAAIM4VDDAkAWVrBgCgRA8/yHU7BSnJTaghddYbtBZGiuoLVVj/cysVJH6Puir38G3enNgnKZS4kDATb8YXkGdjmKFLCBhUHMJxXhBUIdJu9GwWdlcCEQ9QorQ8c9omNdYIDDnExSGAKXUks449Muz4JXIz5VSoRIJAt43Gd3pU1GnZ/MwSIGQuMNiFhDZEncImf8YqrWOKsqG4ng11bc6fs2leU2toKQaF7BmIFWco+fnF8Cn2itKb6BEgoCbfjUEoE7+GUFQaARB+qo8XBhTzbDFmdA2frM1thB+gjTS7DdiamhgWr+GYYAU3q0Vp4sqm2WXWBBwQx35ZtiirGdcxy8SnUH7cIHV45NfoXzVpkWFQHSFg0jmHQcoqyzSQZ7CMMECgxloJuRDx7d2g1u5CmoXX6JBiFyeVTNsUfYvBggW0c4gF5lqhi58Cg1DPuaesNYVHQTx85yqMydWEOsImgpK1LBgqoCE1Xfu39x2tBouvMSCwM1BLMmciADI5iBYRDuDujt0ff9n8KnSyFoQiPoNCe/1rK3IxHIELRmD6qIVImVsHbtGXFXz3IKAW5+FTyujzj+MVBhKwiCBQu4S/eY+gFpdxpNVVmsJp5MzdfyOMKYbM1hkvJr6Gcsl8D5M+HBQDYdvlngQcNMvyh2BhoiHTAhkQKAhYdEzaD9huy1Pqb2o413BdBtClZjJVUTMDIFh/yxI8NPVDUL/w+1GquGCnwsQwpdCIOrg/WELM4GTojPwXwfNug6VX+ltKwiw8IQUXvVseppabYWSWmcr/a74+vqHP4Cn34taL/i5AAEfzadflDUSDQ35YQuzlGHglAktRqxAbmDzMybuIQXpTMUKpoYGUwUklvBurbW6xptTGHkuQMAtZDlUQh29L3RhZmGoijP0mnEF/Gq2sWamoCScTqYgVVC9cLVVzGRtQG2amR4yOr93BDx8Kplzsc8NCOjtOOkXZ/dDjnCPdIVQAojguQ+hXtC79jyS8C5SmOplKy1MMVVZVPpznC4GNOxq7qTJcwSCTtdl4R1vFDRulrgCBwUPQqepGeBRPtBeEIjCz0IoT1Mzn31UiQvUhgQ8xdxs2AJ62fX/HAh48Yp+YWY4guCZIXAUYAie+whqtB/piANKcek5TqdUZGIWlBRSRlZ8QH4fNOsy+NVqbclFPl8goIbPX0B3/x4EQCGGADtD6IKn0H7ibu7sTJ19IRB1UsdvGCZvao5g1vCQkAcNwj7Qmi4+9yDgXdZRmtgldEHmbXF46DXjKvjX6WiPAFFJeOMPXHqWb7jBfK6B4QisnxuVD69/cByli9UsvcDnDgTcukwHF/3CrFUIhPyQef+Fxv2/Ag3FNVvrNFIV2cUq1RG0pJDi18EL7sGLbQch0s1eVfNcg4CbfnFWV+QKN7t/cBZ8q7d0NARYuUif6egik5IjqJWa6aej207YBG7eqrOL/7Mg9J533ydkzoO19YLesSSItolQRnfb84UqHSUXamlBSfw6ZNFDqNykyGXS5xYEnEE0Cp/ZwdO36m1dMYCA2zm2ckNoNyZtccisu8a9npWehlbLFgw/X5kLTQZ+BS7u3qUgqDc8A/h/Ot6WHQqCi3s5aD5wBfSbce/P4Jl3OxuukF1QymcCQP9Ot49PQdkAxefySkGQNrz30VWdI0FA2Upg41DoNf1P6DvzXmG/mfeT2339F39QuVL6aHJ2cdlTqNdnmrUKI/8LIOAPfI7OgSC4e1eE1sOTMQS8Ztx/FDzj7mDuQDHWk05aFqR0//gkePlrnl0sBYFvLXR8hc/uEOCSf9UWAyEIuQFyAgTBPV4zH3yLYoUqup6roWx4UsEsZPUHtEq/MvdA7W7jDzg5uxxA/4k1tAups9U/9uLXcKyACzr7ddb53DTL3TvgQIf4vQf6zbwn1Yx7WxEY7XQ4qsVH1+MdQbTroa/vS1180X9gLZXXFfVp3pLT8NZ41vzsNAl1mG+X6b/7hk1/KFHk5w/K4z2i/h8HK72unYYpLgAAAABJRU5ErkJggg=="
        />
      </defs>
      <style />
      <use id="razzle_svg__Background" href="#razzle_svg__img1" x="26" y="20" />
    </svg>
  )
);

IconRazzle.displayName = 'IconRazzle';
