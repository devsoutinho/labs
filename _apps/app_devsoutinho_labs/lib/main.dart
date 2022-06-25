import 'package:app_devsoutinho_labs/modules/apps/apps_screen.dart';
import 'package:app_devsoutinho_labs/modules/feed_channel/feed_channel_screen.dart';
import 'package:app_devsoutinho_labs/modules/home_shell/home_shell_screen.dart';
import 'package:app_devsoutinho_labs/modules/login/login_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DevSoutinho Labs',
      theme: ThemeData(
        fontFamily: '--apple-system',
        primarySwatch: Colors.orange,
      ),
      routes: {
        LoginScreen.routeName: (context) => const LoginScreen(),
        HomeShellScreen.routeName: (context) => const HomeShellScreen(),
        AppsScreen.routeName: (context) => const AppsScreen(),
        FeedChannelScreen.routeName: (context) => const FeedChannelScreen(),
      },
      home: const LoginScreen(),
    );
  }
}
