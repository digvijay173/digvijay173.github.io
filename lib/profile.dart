// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

import 'package:portfolio/responsive.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({Key key}) : super(key: key);

  List<Widget> navButtons() => [
        NavButton(
          text: "about",
          onPressed: () {
            //html.window.open("https://pawan.live", "Pk");
          },
        ),
        NavButton(
          text: "work",
          onPressed: () {
            //html.window.open("https://pawan.live", "Pk");
          },
        ),
        NavButton(
          text: "contact",
          onPressed: () {
            //html.window.open("https://pawan.live", "Pk");
          },
        ),
      ];

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          elevation: 0.0,
          backgroundColor: Colors.black,
        ),
        drawer: ResponsiveWidget.isSmallScreen(context)
            ? Drawer(
                child: ListView(
                  padding: const EdgeInsets.all(20),
                  children: navButtons(),
                ),
              )
            : null,
        body: SingleChildScrollView(
          child: AnimatedPadding(
            duration: Duration(seconds: 1),
            padding: EdgeInsets.all(MediaQuery.of(context).size.height * 0.1),
            child: ResponsiveWidget(
              largeScreen: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  NavHeader(navButtons: navButtons()),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.1,
                  ),
                  ProfileInfo(),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.1,
                  ),
                  Languages(),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.2,
                  ),
                  SocialInfo(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class NavHeader extends StatelessWidget {
  final List<Widget> navButtons;

  const NavHeader({Key key, this.navButtons}) : super(key: key);

  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: ResponsiveWidget.isSmallScreen(context)
            ? MainAxisAlignment.center
            : MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          PKDot(),
//          Spacer(),
          if (!ResponsiveWidget.isSmallScreen(context))
            Row(
              children: navButtons,
            )
        ],
      ),
    );
  }
}

class PKDot extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        Text(
          "Welcome",
          textScaleFactor: 2,
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
        SizedBox(
          width: 5,
        ),
        AnimatedContainer(
          duration: Duration(seconds: 1),
          height: 8,
          width: 8,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: Colors.orange,
          ),
        ),
      ],
    );
  }
}

class NavButton extends StatelessWidget {
  final text;
  final onPressed;
  final Color color;

  const NavButton(
      {Key key, this.text, this.onPressed, this.color = Colors.orange})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return OutlineButton(
      child: Text(text),
      borderSide: BorderSide(
        color: color,
      ),
      onPressed: onPressed,
      highlightedBorderColor: color,
    );
  }
}

class ProfileInfo extends StatelessWidget {
  profileImage(context) => Container(
        height: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.25
            : MediaQuery.of(context).size.width * 0.25,
        width: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.25
            : MediaQuery.of(context).size.width * 0.25,
        decoration: BoxDecoration(
          //backgroundBlendMode: BlendMode.luminosity,
          //borderRadius: BorderRadius.circular(40),
          shape: BoxShape.circle,
          boxShadow: [
            BoxShadow(
              color: Colors.grey[600],
              blurRadius: 20.0,
            ),
          ],
          image: DecorationImage(
            image: AssetImage("assets/digvijay.jpg"),
            alignment: Alignment.center,
            fit: BoxFit.cover,
          ),
        ),
      );

  final profileData = Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: <Widget>[
      Text(
        "Hey there! I'm ",
        textScaleFactor: 2,
        style: TextStyle(color: Colors.black),
      ),
      Text(
        "Digvijay\nPawar",
        textScaleFactor: 3,
        style: TextStyle(
          color: Colors.black,
          fontWeight: FontWeight.bold,
        ),
      ),
      SizedBox(
        height: 10,
      ),
      Text(
        "I'm 3rd Year Computer Engineering Undergraduate.\n"
        "I'm currently learning Flutter and Machine.\n"
        "I'm Competitive Coding Enthusiast.",
        softWrap: true,
        textScaleFactor: 1.5,
        style: TextStyle(color: Colors.black),
      ),
      SizedBox(
        height: 20,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          // RaisedButton(
          //   shape: StadiumBorder(),
          //   child: Text("Resume"),
          //   color: Colors.red,
          //   onPressed: () {
          //     html.window.open(
          //         "https://google-developers.appspot.com/community/experts/directory/profile/profile-pawan_kumar",
          //         "GDE");
          //   },
          //   padding: EdgeInsets.all(10),
          // ),
          SizedBox(
            width: 20,
          ),
          OutlineButton(
            borderSide: BorderSide(
              color: Colors.red,
            ),
            shape: StadiumBorder(),
            child: Text("Say Hi!"),
            color: Colors.red,
            onPressed: () {
              //html.window.open("https://pawan.live", "Pk");
            },
            padding: EdgeInsets.all(10),
          )
        ],
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          profileImage(context),
          profileData,
        ],
      ),
      smallScreen: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          profileImage(context),
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.1,
          ),
          profileData,
        ],
      ),
    );
  }
}

class SocialInfo extends StatelessWidget {
  List<Widget> socialMediaWidgets() {
    return [
      NavButton(
        text: "Github",
        onPressed: () {
          html.window.open("https://github.com/digvijay173", "Git");
        },
        color: Colors.blue,
      ),
      NavButton(
        text: "LinkedIn",
        onPressed: () {
          html.window.open(
              "https://www.linkedin.com/in/digvijay-pawar-7892bb171/",
              "LinkedIn");
        },
        color: Colors.blue,
      ),
      NavButton(
        text: "Twitter",
        onPressed: () {
          html.window.open("https://twitter.com/djaypawar173", "Twitter");
        },
        color: Colors.blue,
      ),
      NavButton(
        text: "Instagram",
        onPressed: () {
          html.window.open("https://www.instagram.com/digvijay_173/", "Insta");
        },
        color: Colors.blue,
      ),
      NavButton(
        text: "Medium",
        onPressed: () {
          html.window.open("https://medium.com/@djaypawar17", "Medium");
        },
        color: Colors.blue,
      ),
      NavButton(
        text: "Facebook",
        onPressed: () {
          html.window
              .open("https://www.facebook.com/digvijay.pawar1317/", "Fb");
        },
        color: Colors.blue,
      ),
    ];
  }

  Widget copyRightText() => Text(
        "Digvijay Pawar ©️2020",
        textAlign: TextAlign.center,
        style: TextStyle(
          color: Colors.grey,
        ),
      );

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: socialMediaWidgets(),
          ),
          copyRightText(),
        ],
      ),
      smallScreen: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          ...socialMediaWidgets(),
          copyRightText(),
        ],
      ),
    );
  }
}

class Languages extends StatelessWidget {
  final List<Image> images = [
    Image.asset("assets/c.png"),
    Image.asset("assets/c++.png"),
    Image.asset("assets/java.png"),
    Image.asset("assets/python.png"),
    Image.asset("assets/flutter.png"),
    Image.asset("assets/html.png"),
    Image.asset("assets/vscode.png"),
  ];
  languages(context) => Container(
        height: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.25
            : MediaQuery.of(context).size.width * 0.25,
        width: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.25
            : MediaQuery.of(context).size.width * 0.25,
        child: Swiper(
          itemBuilder: (BuildContext context, int index) {
            return images[index];
          },
          itemCount: images.length,
          itemWidth: 300.0,
          itemHeight: 300.0,
          layout: SwiperLayout.CUSTOM,
          customLayoutOption:
              new CustomLayoutOption(startIndex: -1, stateCount: 3)
                  .addRotate([-45.0 / 180, 0.0, 45.0 / 180]).addTranslate([
            new Offset(-370.0, -40.0),
            new Offset(0.0, 0.0),
            new Offset(370.0, -40.0)
          ]),
          autoplay: true,
          autoplayDelay: 1500,
        ),
      );

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Padding(
        padding: const EdgeInsets.fromLTRB(8, 8, 30, 8),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[
            Text(
              "Profound in : \n",
              softWrap: true,
              textScaleFactor: 1.5,
              style:
                  TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
            ),
            Image.asset("assets/c.png", scale: 1.3),
            Image.asset("assets/c++.png", scale: 1.3),
            Image.asset("assets/java.png", scale: 1.3),
            Image.asset("assets/python.png", scale: 1.3),
            Image.asset("assets/flutter.png", scale: 1.3),
            Image.asset("assets/html.png", scale: 1.3),
            Image.asset("assets/vscode.png", scale: 1.3),
          ],
        ),
      ),
      smallScreen: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Text(
                "Profound in : \n",
                softWrap: true,
                textScaleFactor: 1.5,
                style:
                    TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
              ),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[languages(context)],
          ),
        ],
      ),
    );
  }
}
