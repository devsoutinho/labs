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
        padding: EdgeInsets.symmetric(
          vertical: responsive.value({
            Breakpoints.xs: 24,
            Breakpoints.sm: 48,
          }),
          horizontal: responsive.value({
            Breakpoints.xs: 16,
            Breakpoints.sm: 56,
            Breakpoints.md: 112,
          }),
        ),
        constraints: BoxConstraints(minWidth: responsive.getScreenWidth()),
        color: Colors.white,
        child: Center(
          child: GridItem(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                margin: const EdgeInsets.only(bottom: 40),
                child: Image.network(
                  "https://github.com/devsoutinho.png",
                  width: 60,
                  height: 60,
                ),
              ),
              Container(
                margin: const EdgeInsets.only(bottom: 8),
                child: const SelectableText(
                  "Sign in to your account",
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(bottom: 40),
                child: const SelectableText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  style: TextStyle(fontSize: 16, color: Colors.grey),
                ),
              ),
              const Padding(
                padding: EdgeInsets.only(bottom: 16),
                child: TextField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'E-mail',
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.only(bottom: 16),
                child: TextField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'Senha',
                  ),
                ),
              ),
              ElevatedButton(
                style: ButtonStyle(
                  minimumSize: MaterialStateProperty.all(
                    const Size(double.infinity, 42),
                  ),
                ),
                child: const GridItem(
                  as: Row,
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      'Login ',
                      style: TextStyle(color: Colors.white, fontSize: 14),
                    ),
                    Icon(
                      Icons.arrow_forward,
                      size: 14,
                      color: Colors.white,
                    )
                  ],
                ),
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
