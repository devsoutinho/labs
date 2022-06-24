import 'package:flutter/material.dart';

class FeedChannelScreen extends StatelessWidget {
  static const routeName = '/feed/channel';
  const FeedChannelScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Feed Channel'),
      ),
    );
  }
}
