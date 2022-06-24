import 'package:app_devsoutinho_labs/modules/apps/apps_screen.dart';
import 'package:app_devsoutinho_labs/modules/feed_channel/feed_channel_screen.dart';
import 'package:flutter/material.dart';

class HomeShellScreen extends StatelessWidget {
  static const routeName = '/home_shell';
  const HomeShellScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home Shell'),
      ),
      body: Center(
        child: Column(children: [
          ElevatedButton(
            child: const Text('Apps'),
            onPressed: () {
              Navigator.pushNamed(context, AppsScreen.routeName);
            },
          ),
          ElevatedButton(
            child: const Text('Feed DevSoutinho'),
            onPressed: () {
              Navigator.pushNamed(context, FeedChannelScreen.routeName);
            },
          )
        ]),
      ),
    );
  }
}
