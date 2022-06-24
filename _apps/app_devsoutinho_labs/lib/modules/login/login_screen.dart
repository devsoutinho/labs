import 'package:app_devsoutinho_labs/infra/responsivity/valueForBreakpoint.dart';
import 'package:app_devsoutinho_labs/modules/home_shell/home_shell_screen.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  static const routeName = '/login';
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var responsive = Responsive(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Login'),
      ),
      body: Container(
        padding: EdgeInsets.all(
          responsive.value({Breakpoints.xs: 10, Breakpoints.md: 35}),
        ),
        child: Center(
          child: Column(
            children: [
              const Padding(
                padding: EdgeInsets.all(8.0),
                child: TextField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'E-mail',
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.all(8.0),
                child: TextField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'Senha',
                  ),
                ),
              ),
              ElevatedButton(
                child: const Text('Login'),
                onPressed: () {
                  Navigator.pushNamed(context, HomeShellScreen.routeName);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
