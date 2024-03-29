import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { signOut } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

// import VisibleItemList from '../containers/VisibleItemList'
const drawerWidth = 240;

const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#388E3C"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  shoppingCart: {
    marginLeft: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  drawerInfo: {
    marginLeft: 70,
    marginTop: 24
  },
  drawerButtons: {
    marginLeft: 20,
    marginBottom: 8
  },
  drawerButtonText: {
    fontSize: 16,
    marginLeft: 20
  },
  drawerEmail: {
    textAlign: "center",
    fontSize: "16px",
    color: "grey"
  },
  drawerNameText: {
    textAlign: "center",
    fontSize: "24px"
  },
  avatar: {
    fontSize: "40px",
    fontWeight: 100,
    width: 90,
    height: 90,
    color: "fff",
    backgroundColor: "#4CAF50"
  }
}));
const MyAppBar = props => {
  const { products, auth } = props;
  var cartCount = 0;

  if(products){
    products.map(function(item, i){
        cartCount += (products[i].quantity)
    })
  }

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  function drawerOpened() {}

  const drawer = (
    <div>
      <div className={classes.drawerInfo}>
        <Avatar className={classes.avatar}>{props.profile.initials}</Avatar>
      </div>
      {/* <div className={classes.drawerNameText}>
        <p>{props.profile.firstName} {props.profile.lastName}</p>
      </div> */}
      <div className={classes.drawerEmail}>
        <p>{props.profile.email}</p>
      </div>
      <List>
        <Divider />
        <ListItemLink href="/">
          <ListItemText
            classes={{ primary: classes.drawerButtonText }}
            primary="Products"
          />
        </ListItemLink>
        <Divider />
        <ListItemLink href="/cart">
          <ListItemText
            classes={{ primary: classes.drawerButtonText }}
            primary="Shopping Cart"
          />
        </ListItemLink>
        <Divider />
        <ListItemLink href="/services">
          <ListItemText
            classes={{ primary: classes.drawerButtonText }}
            primary="Services"
          />
        </ListItemLink>
        <Divider />
        <ListItemLink href="/account">
          <ListItemText
            classes={{ primary: classes.drawerButtonText }}
            primary="Account"
          />
        </ListItemLink>
        <Divider />
        <ListItem button onClick={props.signOut}>
          <ListItemText
            classes={{ primary: classes.drawerButtonText }}
            primary="Sign Out"
          />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ marginLeft: "70px" }} variant="h5" noWrap>
            Plant A Tree
          </Typography>
          <Link className="link" to={"/cart"}>
            <IconButton
              className={classes.shoppingCart}
              color="inherit"
              aria-label="cart"
            >
              <StyledBadge1 badgeContent={cartCount} color="pink">
                <ShoppingCart />
              </StyledBadge1>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            onOpen={drawerOpened}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
      </div>
    </div>
  );
};
MyAppBar.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};

const mapStateToProps = state => {
  const products =
    state.firestore.ordered.users && state.firestore.ordered.users[0].cart;
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    products
  };
};

const mapDispatchToProps = dispatch => {
  console.log("Signing out...");
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: "users",
      doc: props.auth.uid,
      subcollections: [{ collection: "cart" }]
    }
  ])
)(MyAppBar);
