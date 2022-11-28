import React, { useEffect } from 'react';
import { Container, Link as Typography, Grid } from '@material-ui/core';
import { useIntl } from 'react-intl';
import style from '../styles/Portfolio.module.scss';
import SocialHead from '../components/SocialHead';
import useScrollToTop from '../hooks/useScrollToTop';
import Portfolios from '../utils/portfolio';
import CardPortfolio from '../components/Portfolio/CardPortfolio/CardPortfolio';
import withOutAuth from 'src/HOC/withOutAuth';
const Portfolio = () => {
  useScrollToTop();
  const [selected, setSelected] = React.useState(0);
  const [active, setActive] = React.useState(false);

  const [list, setList] = React.useState(null);

  const handleCategoryChange = (event, item) => {
    if (parseInt(item.key) === 0) setList(Portfolios?.videos);
    else setList(Portfolios?.videos.filter((x) => parseInt(x.category) === parseInt(item.key)));
    setSelected(parseInt(item.key));
  };

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (window.innerWidth > 767) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    setList(Portfolios?.videos);
  }, [Portfolios]);

  return (
    <>
      <SocialHead title={formatMessage({ defaultMessage: 'Portfolio', id: '' })} />

      <div className={style.portfolioRectBanner}>
        <img src="/images/portfolio/Group397.svg" alt="Banner image" className={style.portfolioBannerImage} />

        <Grid direction="row" justifyContent="center" alignItems="center" container spacing={2}>
          <Grid item xs={12}>
            <Typography itemProp="publisher" variant="h2" component="p" align="center" style={{ color: 'white !important' }}>
              Our Portfolio
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth={"md"}>
            <Typography itemProp="publisher" variant="h4" component="p" align="center" style={{ color: 'white !important' }}>
              We help content creators make more and better video content. Here are
          
              some of the projects that we have completed.
            </Typography>
            </Container>
          </Grid>
        </Grid>
      </div>

      <Container>
        <div className={style.container}>
          <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
            spacing={3}
            className={style.padding15}
          >
            {Portfolios?.categories?.map((item) => {
              if (item.key === selected) {
                return (
                  <Grid item className={style.chipSelected} onClick={(e) => handleCategoryChange(e, item)}>
                    <span className={style.chipSelectedText}>{item.title}</span>
                  </Grid>
                );
              }
              return (
                <Grid item className={style.chip} onClick={(e) => handleCategoryChange(e, item)}>
                  <span className={style.chipText}>{item.title}</span>
                </Grid>
              );
            })}
          </Grid>

          <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
            spacing={2}
         
          >
            {
              !!list &&
              list?.map((item, index) => (
                <CardPortfolio title={item.title} classes={active && style.cardVisible} videoId={item.id} id={index} />
              ))}
          </Grid>

          {/* <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
            className={style.padding15}
          >
            <Grid
              item
            >
              <Button size="medium" variant="outlined">
                Show More
              </Button>

            </Grid>
          </Grid> */}
        </div>
      </Container>
    </>
  );
};
export default withOutAuth(Portfolio);

export const getServerSideProps = async () => ({
  props: {
    // gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
