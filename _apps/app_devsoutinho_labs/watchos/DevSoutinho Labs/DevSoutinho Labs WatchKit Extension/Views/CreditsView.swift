//
//  CreditsView.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 01/07/22.
//

import SwiftUI

struct CreditsView: View {
    let randomNumber: Int
    
    var body: some View {
        VStack {
            Text("Hello, World! \(randomNumber)")
            Sign()
        }
    }
}

struct CreditsView_Previews: PreviewProvider {
    static var _randomNumber = 1
    
    static var previews: some View {
        CreditsView(randomNumber: _randomNumber)
    }
}
