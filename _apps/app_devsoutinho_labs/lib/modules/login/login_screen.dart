import 'package:app_devsoutinho_labs/infra/responsivity/grid_item.dart';
import 'package:app_devsoutinho_labs/infra/responsivity/value_for_breakpoint.dart';
import 'package:app_devsoutinho_labs/modules/home_shell/home_shell_screen.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  static const routeName = '/login';
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var responsive = Responsive(context);

    return Scaffold(
      body: Container(
        color: Colors.grey,
        child: GridItem(
          as: Row,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Flexible(
              flex: responsive.value({
                Breakpoints.xs: 0,
                Breakpoints.sm: 1,
                Breakpoints.lg: 0,
              }),
              child: const LoginScreenBackground(),
            ),
            const LoginFormPattern(),
            const Flexible(
              flex: 1,
              child: LoginScreenBackground(),
            ),
          ],
        ),
      ),
    );
  }
}

class LoginFormPattern extends StatelessWidget {
  const LoginFormPattern({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var responsive = Responsive(context);

    return LimitedBox(
      maxWidth: responsive.value({
        Breakpoints.xs: responsive.getScreenWidth(),
        Breakpoints.md: 608,
      }),
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 16),
        constraints: BoxConstraints(minWidth: responsive.getScreenWidth()),
        color: Colors.white,
        child: Center(
          child: GridItem(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                "Sign in to your account",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              ),
              const Text(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                style: TextStyle(fontSize: 16),
              ),
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'E-mail',
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 8.0),
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

class LoginScreenBackground extends StatelessWidget {
  const LoginScreenBackground({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage("assets/background-login.jpg"),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
