import 'package:flutter/material.dart';

class AppsScreen extends StatelessWidget {
  static const routeName = '/apps';
  const AppsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Apps Screen'),
      ),
    );
  }
}
