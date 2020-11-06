import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Appbar from '../../organisms/appbar/Appbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#E9ECF5',
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 1200,
  },
  image: {
    width: 150,
    height: 125,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Appbar/>

      <div style={{width: '70%', margin: '30px auto'}}>
          <Paper className={classes.paper} variant="outlined">


            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>

            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>



            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>



            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>



            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>



            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>




            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>




            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>




            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>




            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" >
                          피트니스 센터 양도합니다!
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <img src="invalid-name.png"/>
                          금정구 수림로 91번길 31
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          기한 ; 21년 1월 24일
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          어떤내용을 넣으면 좋을까
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src="2.png" />
                    </ButtonBase>
                    <Grid>
                      <img alt="complex" src="812.png" /> 
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">50000원</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" >
                            피트니스 센터 양도합니다!
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                          <img src="invalid-name.png"/>
                            금정구 수림로 91번길 31
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            기한 ; 20년 12월 25일
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            어떤 내용을 넣으면 좋을까
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                      </ButtonBase>
                      <Grid>
                        <img alt="complex" src="812.png" /> 
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid> 
            </Grid>
          </Paper>
      </div>
    </div>
  );
}