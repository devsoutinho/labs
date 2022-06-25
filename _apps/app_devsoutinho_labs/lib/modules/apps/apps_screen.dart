import 'package:flutter/material.dart';

class AppsScreen extends StatelessWidget {
  static const routeName = '/apps';
  const AppsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        iconTheme: const IconThemeData(color: Colors.white),
        title: const Text('Apps Screen', style: TextStyle(color: Colors.white)),
      ),
    );
  }
}
